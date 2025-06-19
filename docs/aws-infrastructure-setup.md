# AWS Infrastructure Setup Guide

## Overview
This guide walks you through setting up the complete AWS infrastructure for hosting your Re:Healthify website.

## Prerequisites
- AWS Account with billing set up
- AWS CLI installed and configured
- Domain name (optional but recommended)

## Step 1: Install and Configure AWS CLI

### Install AWS CLI
```bash
# macOS
brew install awscli

# Windows
choco install awscli

# Linux
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

### Configure AWS CLI
```bash
aws configure

# Enter when prompted:
# AWS Access Key ID: AKIA...
# AWS Secret Access Key: wJalrXUtnFEMI...
# Default region name: us-east-1
# Default output format: json
```

## Step 2: Create IAM User for Deployment

### Create IAM Policy
```bash
# Create policy file
cat > deployment-policy.json << 'EOF'
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:PutObjectAcl",
                "s3:GetObject",
                "s3:DeleteObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::rehealthify-website-*",
                "arn:aws:s3:::rehealthify-website-*/*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "cloudfront:CreateInvalidation",
                "cloudfront:GetInvalidation",
                "cloudfront:ListInvalidations"
            ],
            "Resource": "*"
        }
    ]
}
EOF

# Create the policy
aws iam create-policy \
    --policy-name ReHealthifyDeploymentPolicy \
    --policy-document file://deployment-policy.json
```

### Create IAM User
```bash
# Create user
aws iam create-user --user-name rehealthify-deployer

# Attach policy to user
aws iam attach-user-policy \
    --user-name rehealthify-deployer \
    --policy-arn arn:aws:iam::YOUR_ACCOUNT_ID:policy/ReHealthifyDeploymentPolicy

# Create access keys
aws iam create-access-key --user-name rehealthify-deployer
```

## Step 3: Set Up S3 Bucket

### Create Production Bucket
```bash
# Create bucket (bucket names must be globally unique)
aws s3 mb s3://rehealthify-website-prod --region us-east-1

# Enable static website hosting
aws s3 website s3://rehealthify-website-prod \
    --index-document index.html \
    --error-document index.html
```

### Configure Bucket Policy
```bash
cat > bucket-policy.json << 'EOF'
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
EOF

# Apply bucket policy
aws s3api put-bucket-policy \
    --bucket rehealthify-website-prod \
    --policy file://bucket-policy.json
```

### Configure CORS (if needed for API calls)
```bash
cat > cors-config.json << 'EOF'
{
    "CORSRules": [
        {
            "AllowedHeaders": ["*"],
            "AllowedMethods": ["GET", "HEAD"],
            "AllowedOrigins": ["https://rehealthify.com", "https://www.rehealthify.com"],
            "ExposeHeaders": [],
            "MaxAgeSeconds": 3000
        }
    ]
}
EOF

aws s3api put-bucket-cors \
    --bucket rehealthify-website-prod \
    --cors-configuration file://cors-config.json
```

## Step 4: Set Up CloudFront Distribution

### Create Origin Access Control (OAC)
```bash
cat > oac-config.json << 'EOF'
{
    "Name": "rehealthify-oac",
    "Description": "OAC for Re:Healthify website",
    "OriginAccessControlOriginType": "s3",
    "SigningBehavior": "always",
    "SigningProtocol": "sigv4"
}
EOF

aws cloudfront create-origin-access-control \
    --origin-access-control-config file://oac-config.json
```

### Create CloudFront Distribution
```bash
cat > cloudfront-config.json << 'EOF'
{
    "CallerReference": "rehealthify-2024-01-01",
    "Comment": "Re:Healthify Website CDN",
    "DefaultCacheBehavior": {
        "TargetOriginId": "S3-rehealthify-website-prod",
        "ViewerProtocolPolicy": "redirect-to-https",
        "AllowedMethods": {
            "Quantity": 7,
            "Items": ["GET", "HEAD", "OPTIONS", "PUT", "POST", "PATCH", "DELETE"],
            "CachedMethods": {
                "Quantity": 2,
                "Items": ["GET", "HEAD"]
            }
        },
        "ForwardedValues": {
            "QueryString": false,
            "Cookies": {
                "Forward": "none"
            }
        },
        "TrustedSigners": {
            "Enabled": false,
            "Quantity": 0
        },
        "MinTTL": 0,
        "DefaultTTL": 86400,
        "MaxTTL": 31536000,
        "Compress": true
    },
    "Origins": {
        "Quantity": 1,
        "Items": [
            {
                "Id": "S3-rehealthify-website-prod",
                "DomainName": "rehealthify-website-prod.s3.us-east-1.amazonaws.com",
                "S3OriginConfig": {
                    "OriginAccessIdentity": ""
                }
            }
        ]
    },
    "Enabled": true,
    "PriceClass": "PriceClass_100",
    "CustomErrorResponses": {
        "Quantity": 2,
        "Items": [
            {
                "ErrorCode": 403,
                "ResponsePagePath": "/index.html",
                "ResponseCode": "200",
                "ErrorCachingMinTTL": 300
            },
            {
                "ErrorCode": 404,
                "ResponsePagePath": "/index.html",
                "ResponseCode": "200",
                "ErrorCachingMinTTL": 300
            }
        ]
    }
}
EOF

# Create distribution
aws cloudfront create-distribution \
    --distribution-config file://cloudfront-config.json
```

## Step 5: SSL Certificate Setup

### Request Certificate (must be in us-east-1 for CloudFront)
```bash
# Request certificate
aws acm request-certificate \
    --domain-name rehealthify.com \
    --subject-alternative-names www.rehealthify.com \
    --validation-method DNS \
    --region us-east-1

# List certificates to get ARN
aws acm list-certificates --region us-east-1
```

### Validate Certificate
```bash
# Get validation records
aws acm describe-certificate \
    --certificate-arn arn:aws:acm:us-east-1:ACCOUNT:certificate/CERT-ID \
    --region us-east-1

# Add the CNAME records to your DNS provider
# Wait for validation (can take 5-30 minutes)
```

## Step 6: Route 53 Setup (Optional)

### Create Hosted Zone
```bash
# Create hosted zone
aws route53 create-hosted-zone \
    --name rehealthify.com \
    --caller-reference $(date +%s)

# Get name servers
aws route53 get-hosted-zone --id /hostedzone/Z123456789
```

### Create DNS Records
```bash
cat > dns-records.json << 'EOF'
{
    "Changes": [
        {
            "Action": "CREATE",
            "ResourceRecordSet": {
                "Name": "rehealthify.com",
                "Type": "A",
                "AliasTarget": {
                    "DNSName": "d123456789.cloudfront.net",
                    "EvaluateTargetHealth": false,
                    "HostedZoneId": "Z2FDTNDATAQYW2"
                }
            }
        },
        {
            "Action": "CREATE",
            "ResourceRecordSet": {
                "Name": "www.rehealthify.com",
                "Type": "CNAME",
                "TTL": 300,
                "ResourceRecords": [
                    {
                        "Value": "rehealthify.com"
                    }
                ]
            }
        }
    ]
}
EOF

aws route53 change-resource-record-sets \
    --hosted-zone-id Z123456789 \
    --change-batch file://dns-records.json
```

## Step 7: CloudWatch Monitoring

### Create CloudWatch Dashboard
```bash
cat > dashboard-config.json << 'EOF'
{
    "widgets": [
        {
            "type": "metric",
            "x": 0,
            "y": 0,
            "width": 12,
            "height": 6,
            "properties": {
                "metrics": [
                    ["AWS/CloudFront", "Requests", "DistributionId", "E123456789"],
                    [".", "BytesDownloaded", ".", "."],
                    [".", "BytesUploaded", ".", "."]
                ],
                "view": "timeSeries",
                "stacked": false,
                "region": "us-east-1",
                "title": "CloudFront Metrics",
                "period": 300
            }
        },
        {
            "type": "metric",
            "x": 0,
            "y": 6,
            "width": 12,
            "height": 6,
            "properties": {
                "metrics": [
                    ["AWS/CloudFront", "4xxErrorRate", "DistributionId", "E123456789"],
                    [".", "5xxErrorRate", ".", "."]
                ],
                "view": "timeSeries",
                "stacked": false,
                "region": "us-east-1",
                "title": "Error Rates",
                "period": 300
            }
        }
    ]
}
EOF

aws cloudwatch put-dashboard \
    --dashboard-name "ReHealthify-Website" \
    --dashboard-body file://dashboard-config.json
```

### Set Up Billing Alerts
```bash
# Create SNS topic for alerts
aws sns create-topic --name billing-alerts

# Subscribe to topic
aws sns subscribe \
    --topic-arn arn:aws:sns:us-east-1:ACCOUNT:billing-alerts \
    --protocol email \
    --notification-endpoint your-email@example.com

# Create billing alarm
aws cloudwatch put-metric-alarm \
    --alarm-name "AWS-Billing-Alert" \
    --alarm-description "Alert when AWS bill exceeds $50" \
    --metric-name EstimatedCharges \
    --namespace AWS/Billing \
    --statistic Maximum \
    --period 86400 \
    --threshold 50 \
    --comparison-operator GreaterThanThreshold \
    --dimensions Name=Currency,Value=USD \
    --evaluation-periods 1 \
    --alarm-actions arn:aws:sns:us-east-1:ACCOUNT:billing-alerts
```

## Step 8: Security Hardening

### S3 Bucket Security
```bash
# Block public access (except for website hosting)
aws s3api put-public-access-block \
    --bucket rehealthify-website-prod \
    --public-access-block-configuration \
    BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=false,RestrictPublicBuckets=false

# Enable versioning
aws s3api put-bucket-versioning \
    --bucket rehealthify-website-prod \
    --versioning-configuration Status=Enabled

# Enable server-side encryption
aws s3api put-bucket-encryption \
    --bucket rehealthify-website-prod \
    --server-side-encryption-configuration '{
        "Rules": [
            {
                "ApplyServerSideEncryptionByDefault": {
                    "SSEAlgorithm": "AES256"
                }
            }
        ]
    }'
```

### CloudFront Security Headers
```bash
# Create response headers policy
cat > security-headers-policy.json << 'EOF'
{
    "ResponseHeadersPolicyConfig": {
        "Name": "ReHealthify-Security-Headers",
        "Comment": "Security headers for Re:Healthify website",
        "SecurityHeadersConfig": {
            "StrictTransportSecurity": {
                "AccessControlMaxAgeSec": 31536000,
                "IncludeSubdomains": true,
                "Override": true
            },
            "ContentTypeOptions": {
                "Override": true
            },
            "FrameOptions": {
                "FrameOption": "DENY",
                "Override": true
            },
            "XSSProtection": {
                "ModeBlock": true,
                "Protection": true,
                "Override": true
            },
            "ReferrerPolicy": {
                "ReferrerPolicy": "strict-origin-when-cross-origin",
                "Override": true
            }
        }
    }
}
EOF

aws cloudfront create-response-headers-policy \
    --response-headers-policy-config file://security-headers-policy.json
```

## Step 9: Backup and Disaster Recovery

### Enable S3 Cross-Region Replication
```bash
# Create replication bucket
aws s3 mb s3://rehealthify-website-backup --region us-west-2

# Create replication role
cat > replication-role-policy.json << 'EOF'
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "s3.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
}
EOF

aws iam create-role \
    --role-name S3ReplicationRole \
    --assume-role-policy-document file://replication-role-policy.json

# Configure replication
cat > replication-config.json << 'EOF'
{
    "Role": "arn:aws:iam::ACCOUNT:role/S3ReplicationRole",
    "Rules": [
        {
            "ID": "ReplicateEverything",
            "Status": "Enabled",
            "Prefix": "",
            "Destination": {
                "Bucket": "arn:aws:s3:::rehealthify-website-backup"
            }
        }
    ]
}
EOF

aws s3api put-bucket-replication \
    --bucket rehealthify-website-prod \
    --replication-configuration file://replication-config.json
```

## Step 10: Testing and Validation

### Test Deployment
```bash
# Build and deploy test
npm run build
aws s3 sync dist/ s3://rehealthify-website-prod --delete

# Test website
curl -I https://rehealthify.com
curl -I https://www.rehealthify.com

# Test redirects
curl -I http://rehealthify.com  # Should redirect to HTTPS
```

### Performance Testing
```bash
# Install lighthouse CLI
npm install -g lighthouse

# Run performance audit
lighthouse https://rehealthify.com --output html --output-path ./lighthouse-report.html

# Test from different locations
curl -w "@curl-format.txt" -o /dev/null -s https://rehealthify.com
```

## Cost Optimization Tips

1. **Use CloudFront Price Class 100** (North America and Europe only)
2. **Set appropriate cache headers** for static assets
3. **Enable compression** in CloudFront
4. **Use S3 Intelligent Tiering** for cost optimization
5. **Monitor usage** with CloudWatch and billing alerts

## Maintenance Commands

```bash
# Check S3 bucket size
aws s3 ls s3://rehealthify-website-prod --recursive --human-readable --summarize

# List CloudFront distributions
aws cloudfront list-distributions --query 'DistributionList.Items[*].[Id,DomainName,Status]' --output table

# Check certificate status
aws acm list-certificates --region us-east-1 --query 'CertificateSummaryList[*].[DomainName,Status]' --output table

# View recent CloudFront logs
aws logs describe-log-groups --log-group-name-prefix "/aws/cloudfront"
```

This infrastructure setup provides a robust, scalable, and secure hosting solution for your Re:Healthify website on AWS!