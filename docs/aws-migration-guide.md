# Complete Guide: Migrating from Netlify to AWS

## Overview

This guide covers migrating your Re:Healthify React application from Netlify to AWS using multiple deployment strategies.

## AWS Deployment Options

### Option 1: S3 + CloudFront (Recommended for Static Sites)
**Best for:** Static React apps, cost-effective, global CDN
**Cost:** ~$1-5/month for small sites

### Option 2: AWS Amplify
**Best for:** Full-stack apps, CI/CD integration, easy setup
**Cost:** ~$1-15/month depending on usage

### Option 3: EC2 + Load Balancer
**Best for:** Custom server requirements, full control
**Cost:** ~$10-50/month depending on instance size

### Option 4: ECS/Fargate
**Best for:** Containerized applications, microservices
**Cost:** ~$15-100/month depending on resources

## Option 1: S3 + CloudFront (Recommended)

### Step 1: Create S3 Bucket
```bash
# Install AWS CLI
npm install -g aws-cli

# Configure AWS credentials
aws configure
```

```bash
# Create S3 bucket (bucket names must be globally unique)
aws s3 mb s3://rehealthify-website-prod

# Enable static website hosting
aws s3 website s3://rehealthify-website-prod \
  --index-document index.html \
  --error-document index.html
```

### Step 2: Build and Upload
```bash
# Build your React app
npm run build

# Upload to S3
aws s3 sync dist/ s3://rehealthify-website-prod --delete

# Set public read permissions
aws s3api put-bucket-policy --bucket rehealthify-website-prod --policy '{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::rehealthify-website-prod/*"
    }
  ]
}'
```

### Step 3: Create CloudFront Distribution
```bash
# Create CloudFront distribution
aws cloudfront create-distribution --distribution-config '{
  "CallerReference": "rehealthify-'$(date +%s)'",
  "Comment": "Re:Healthify Website CDN",
  "DefaultCacheBehavior": {
    "TargetOriginId": "S3-rehealthify-website-prod",
    "ViewerProtocolPolicy": "redirect-to-https",
    "TrustedSigners": {
      "Enabled": false,
      "Quantity": 0
    },
    "ForwardedValues": {
      "QueryString": false,
      "Cookies": {
        "Forward": "none"
      }
    },
    "MinTTL": 0,
    "Compress": true
  },
  "Origins": {
    "Quantity": 1,
    "Items": [
      {
        "Id": "S3-rehealthify-website-prod",
        "DomainName": "rehealthify-website-prod.s3.amazonaws.com",
        "S3OriginConfig": {
          "OriginAccessIdentity": ""
        }
      }
    ]
  },
  "Enabled": true,
  "PriceClass": "PriceClass_100"
}'
```

### Step 4: Custom Domain Setup
```bash
# Request SSL certificate (must be in us-east-1 for CloudFront)
aws acm request-certificate \
  --domain-name rehealthify.com \
  --subject-alternative-names www.rehealthify.com \
  --validation-method DNS \
  --region us-east-1

# Update CloudFront distribution with custom domain
# (Use AWS Console for easier configuration)
```

## Option 2: AWS Amplify

### Step 1: Install Amplify CLI
```bash
npm install -g @aws-amplify/cli
amplify configure
```

### Step 2: Initialize Amplify
```bash
# In your project directory
amplify init

# Follow prompts:
# Project name: rehealthify
# Environment: prod
# Default editor: Visual Studio Code
# App type: javascript
# Framework: react
# Source directory: src
# Build directory: dist
# Build command: npm run build
# Start command: npm run dev
```

### Step 3: Add Hosting
```bash
# Add hosting with CloudFront and S3
amplify add hosting

# Choose: Amazon CloudFront and S3
# Hosting bucket name: (accept default)
# Index doc: index.html
# Error doc: index.html

# Deploy
amplify publish
```

### Step 4: Custom Domain
```bash
# Add custom domain
amplify add hosting

# Choose: Add a custom domain
# Domain name: rehealthify.com
# Subdomain: www (optional)
```

## Option 3: EC2 Deployment

### Step 1: Launch EC2 Instance
```bash
# Create key pair
aws ec2 create-key-pair --key-name rehealthify-key \
  --query 'KeyMaterial' --output text > rehealthify-key.pem
chmod 400 rehealthify-key.pem

# Launch instance
aws ec2 run-instances \
  --image-id ami-0abcdef1234567890 \
  --count 1 \
  --instance-type t3.micro \
  --key-name rehealthify-key \
  --security-group-ids sg-903004f8 \
  --subnet-id subnet-6e7f829e
```

### Step 2: Setup Server
```bash
# Connect to instance
ssh -i rehealthify-key.pem ec2-user@your-instance-ip

# Install Node.js and nginx
sudo yum update -y
sudo yum install -y nginx
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18

# Install PM2 for process management
npm install -g pm2
```

### Step 3: Deploy Application
```bash
# Clone your repository
git clone https://github.com/yourusername/rehealthify.git
cd rehealthify

# Install dependencies and build
npm install
npm run build

# Configure nginx
sudo nano /etc/nginx/nginx.conf
```

Nginx configuration:
```nginx
server {
    listen 80;
    server_name rehealthify.com www.rehealthify.com;
    
    location / {
        root /home/ec2-user/rehealthify/dist;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
    
    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

## Automated Deployment with GitHub Actions

### Create `.github/workflows/deploy-aws.yml`
```yaml
name: Deploy to AWS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
    
    - name: Deploy to S3
      run: |
        aws s3 sync dist/ s3://${{ secrets.S3_BUCKET }} --delete
    
    - name: Invalidate CloudFront
      run: |
        aws cloudfront create-invalidation \
          --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \
          --paths "/*"
```

## Environment Variables and Secrets

### GitHub Secrets to Add:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `S3_BUCKET`
- `CLOUDFRONT_DISTRIBUTION_ID`

### Environment Variables in React:
```bash
# .env.production
VITE_API_URL=https://api.rehealthify.com
VITE_ENVIRONMENT=production
```

## Cost Comparison

### Netlify (Current)
- **Free tier:** 100GB bandwidth, 300 build minutes
- **Pro:** $19/month - 1TB bandwidth, 25,000 build minutes
- **Business:** $99/month - Unlimited bandwidth

### AWS Options

#### S3 + CloudFront
- **S3 Storage:** $0.023/GB/month
- **CloudFront:** $0.085/GB for first 10TB
- **Route 53:** $0.50/month per hosted zone
- **Total:** ~$1-10/month for most websites

#### Amplify
- **Build & Deploy:** $0.01/build minute
- **Hosting:** $0.15/GB served
- **Total:** ~$5-25/month depending on traffic

#### EC2
- **t3.micro:** $8.50/month (free tier eligible)
- **Load Balancer:** $16.20/month
- **Total:** ~$25-50/month

## Migration Checklist

### Pre-Migration
- [ ] Backup current Netlify deployment
- [ ] Document current environment variables
- [ ] Test build process locally
- [ ] Set up AWS account and billing alerts

### Domain Migration
- [ ] Update DNS records to point to AWS
- [ ] Set up SSL certificate in AWS
- [ ] Configure redirects if needed
- [ ] Test domain propagation

### Post-Migration
- [ ] Monitor performance and costs
- [ ] Set up CloudWatch monitoring
- [ ] Configure backup strategies
- [ ] Update documentation

## Performance Optimizations

### CloudFront Settings
```json
{
  "CacheBehaviors": [
    {
      "PathPattern": "*.js",
      "TTL": 31536000,
      "Compress": true
    },
    {
      "PathPattern": "*.css",
      "TTL": 31536000,
      "Compress": true
    },
    {
      "PathPattern": "*.html",
      "TTL": 0,
      "Compress": true
    }
  ]
}
```

### S3 Bucket Policies
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::rehealthify-website-prod/*"
    }
  ]
}
```

## Monitoring and Logging

### CloudWatch Setup
```bash
# Create CloudWatch dashboard
aws cloudwatch put-dashboard --dashboard-name "ReHealthify-Website" --dashboard-body '{
  "widgets": [
    {
      "type": "metric",
      "properties": {
        "metrics": [
          ["AWS/CloudFront", "Requests", "DistributionId", "YOUR_DISTRIBUTION_ID"],
          ["AWS/CloudFront", "BytesDownloaded", "DistributionId", "YOUR_DISTRIBUTION_ID"]
        ],
        "period": 300,
        "stat": "Sum",
        "region": "us-east-1",
        "title": "CloudFront Metrics"
      }
    }
  ]
}'
```

## Troubleshooting

### Common Issues
1. **404 errors on refresh:** Ensure CloudFront has custom error pages configured
2. **Slow initial load:** Check CloudFront cache settings
3. **Build failures:** Verify Node.js version compatibility
4. **SSL certificate issues:** Ensure certificate is in us-east-1 region

### Debug Commands
```bash
# Check S3 bucket contents
aws s3 ls s3://rehealthify-website-prod --recursive

# Check CloudFront distribution status
aws cloudfront get-distribution --id YOUR_DISTRIBUTION_ID

# View CloudWatch logs
aws logs describe-log-groups
```

## Security Best Practices

### IAM Policies
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:GetObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::rehealthify-website-prod/*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "*"
    }
  ]
}
```

### Security Headers
```javascript
// Add to your build process or CloudFront
const securityHeaders = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin'
};
```

This comprehensive guide should help you successfully migrate from Netlify to AWS while maintaining or improving your website's performance and capabilities!