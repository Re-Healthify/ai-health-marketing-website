# GitHub Actions Workflow for AWS Deployment

## Overview
GitHub Actions will automatically build and deploy your Re:Healthify website to AWS whenever you push to the main branch.

## Step 1: Create GitHub Secrets

In your GitHub repository, go to **Settings > Secrets and variables > Actions** and add these secrets:

### Required Secrets:
```
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
S3_BUCKET=rehealthify-website-prod
CLOUDFRONT_DISTRIBUTION_ID=E1234567890123
```

## Step 2: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Re:Healthify to AWS

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

env:
  NODE_VERSION: '18'
  S3_BUCKET: ${{ secrets.S3_BUCKET }}
  CLOUDFRONT_DISTRIBUTION_ID: ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }}

jobs:
  # Job 1: Build and Test
  build:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: ${{ env.NODE_VERSION }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linting
      run: npm run lint
    
    - name: Build application
      run: npm run build
      env:
        VITE_ENVIRONMENT: production
    
    - name: Upload build artifacts
      uses: actions/upload-artifact@v4
      with:
        name: build-files
        path: dist/
        retention-days: 1

  # Job 2: Deploy to AWS (only on main branch)
  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    
    steps:
    - name: Download build artifacts
      uses: actions/download-artifact@v4
      with:
        name: build-files
        path: dist/
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v4
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
    
    - name: Deploy to S3
      run: |
        echo "Deploying to S3 bucket: $S3_BUCKET"
        aws s3 sync dist/ s3://$S3_BUCKET --delete --exact-timestamps
        
        # Set cache headers for different file types
        aws s3 cp s3://$S3_BUCKET s3://$S3_BUCKET --recursive \
          --exclude "*" --include "*.js" --include "*.css" \
          --metadata-directive REPLACE \
          --cache-control "public, max-age=31536000, immutable"
        
        aws s3 cp s3://$S3_BUCKET s3://$S3_BUCKET --recursive \
          --exclude "*" --include "*.html" \
          --metadata-directive REPLACE \
          --cache-control "public, max-age=0, must-revalidate"
    
    - name: Invalidate CloudFront cache
      run: |
        echo "Invalidating CloudFront distribution: $CLOUDFRONT_DISTRIBUTION_ID"
        aws cloudfront create-invalidation \
          --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
          --paths "/*"
    
    - name: Deployment summary
      run: |
        echo "✅ Deployment completed successfully!"
        echo "🌐 Website URL: https://rehealthify.com"
        echo "📊 S3 Bucket: $S3_BUCKET"
        echo "🚀 CloudFront Distribution: $CLOUDFRONT_DISTRIBUTION_ID"

  # Job 3: Notify on deployment status
  notify:
    needs: [build, deploy]
    runs-on: ubuntu-latest
    if: always() && github.ref == 'refs/heads/main'
    
    steps:
    - name: Notify success
      if: needs.deploy.result == 'success'
      run: |
        echo "🎉 Re:Healthify successfully deployed to AWS!"
        # Add Slack/Discord notification here if needed
    
    - name: Notify failure
      if: needs.deploy.result == 'failure'
      run: |
        echo "❌ Deployment failed. Check logs for details."
        # Add failure notification here if needed
```

## Step 3: Environment-Specific Workflows

### Staging Environment
Create `.github/workflows/deploy-staging.yml`:

```yaml
name: Deploy to Staging

on:
  push:
    branches: [ develop ]

env:
  NODE_VERSION: '18'
  S3_BUCKET: rehealthify-website-staging
  CLOUDFRONT_DISTRIBUTION_ID: ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID_STAGING }}

jobs:
  deploy-staging:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: ${{ env.NODE_VERSION }}
        cache: 'npm'
    
    - name: Install and build
      run: |
        npm ci
        npm run build
      env:
        VITE_ENVIRONMENT: staging
        VITE_API_URL: https://api-staging.rehealthify.com
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v4
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
    
    - name: Deploy to staging
      run: |
        aws s3 sync dist/ s3://$S3_BUCKET --delete
        aws cloudfront create-invalidation \
          --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
          --paths "/*"
```

## Step 4: Advanced Features

### Pull Request Previews
```yaml
name: PR Preview

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  preview:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Build preview
      run: |
        npm ci
        npm run build
    
    - name: Deploy preview
      run: |
        PREVIEW_PATH="pr-${{ github.event.number }}"
        aws s3 sync dist/ s3://${{ secrets.S3_BUCKET }}/previews/$PREVIEW_PATH/
        
        echo "Preview URL: https://rehealthify.com/previews/$PREVIEW_PATH/"
```

### Performance Monitoring
```yaml
    - name: Lighthouse CI
      uses: treosh/lighthouse-ci-action@v10
      with:
        urls: |
          https://rehealthify.com
          https://rehealthify.com/pricing
          https://rehealthify.com/contact
        uploadArtifacts: true
        temporaryPublicStorage: true
```

## Step 5: Workflow Optimization

### Caching Strategy
```yaml
    - name: Cache node modules
      uses: actions/cache@v3
      with:
        path: ~/.npm
        key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
        restore-keys: |
          ${{ runner.os }}-node-
    
    - name: Cache build output
      uses: actions/cache@v3
      with:
        path: dist
        key: ${{ runner.os }}-build-${{ github.sha }}
```

### Matrix Builds (for testing multiple environments)
```yaml
strategy:
  matrix:
    node-version: [16, 18, 20]
    
steps:
- name: Setup Node.js ${{ matrix.node-version }}
  uses: actions/setup-node@v4
  with:
    node-version: ${{ matrix.node-version }}
```

## Monitoring and Debugging

### View Workflow Status
- Go to your GitHub repository
- Click on the **Actions** tab
- View running/completed workflows
- Click on any workflow to see detailed logs

### Common Issues and Solutions

1. **AWS Credentials Error**
   ```
   Error: Credentials not found
   ```
   **Solution:** Verify AWS secrets are correctly set in GitHub

2. **S3 Sync Fails**
   ```
   Error: Access Denied
   ```
   **Solution:** Check IAM permissions for S3 bucket

3. **Build Fails**
   ```
   Error: Module not found
   ```
   **Solution:** Ensure all dependencies are in package.json

### Debug Commands
```yaml
- name: Debug environment
  run: |
    echo "Node version: $(node --version)"
    echo "NPM version: $(npm --version)"
    echo "Current directory: $(pwd)"
    echo "Files in dist: $(ls -la dist/)"
    
- name: Test AWS connection
  run: |
    aws sts get-caller-identity
    aws s3 ls s3://$S3_BUCKET --recursive | head -10
```