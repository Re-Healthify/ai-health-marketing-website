# GitHub Version Management Guide for Re:Healthify

## Initial Setup

### 1. Initialize Git Repository
```bash
# Initialize git in your project directory
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Re:Healthify website setup"
```

### 2. Connect to GitHub
```bash
# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/rehealthify.git

# Push to GitHub
git push -u origin main
```

## Branching Strategy

### Main Branches
- **`main`** - Production-ready code
- **`develop`** - Integration branch for features
- **`staging`** - Pre-production testing

### Feature Branches
```bash
# Create and switch to feature branch
git checkout -b feature/pricing-page-updates
git checkout -b feature/hero-section-redesign
git checkout -b bugfix/header-dropdown-fix
```

### Branch Naming Conventions
- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `hotfix/description` - Critical production fixes
- `chore/description` - Maintenance tasks

## Version Tagging

### Semantic Versioning (SemVer)
Format: `MAJOR.MINOR.PATCH` (e.g., v1.2.3)

- **MAJOR** - Breaking changes
- **MINOR** - New features (backward compatible)
- **PATCH** - Bug fixes (backward compatible)

### Creating Tags
```bash
# Create annotated tag
git tag -a v1.0.0 -m "Release version 1.0.0: Initial website launch"

# Push tags to GitHub
git push origin --tags

# List all tags
git tag -l
```

## Commit Message Conventions

### Format
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks

### Examples
```bash
git commit -m "feat(pricing): add ROI calculator component"
git commit -m "fix(header): resolve dropdown menu positioning issue"
git commit -m "style(hero): update background color to off-white"
git commit -m "docs(readme): add deployment instructions"
```

## Release Management

### 1. Prepare Release
```bash
# Switch to develop branch
git checkout develop

# Create release branch
git checkout -b release/v1.1.0

# Update version in package.json
npm version minor

# Commit version bump
git commit -m "chore: bump version to 1.1.0"
```

### 2. Finalize Release
```bash
# Merge to main
git checkout main
git merge release/v1.1.0

# Create tag
git tag -a v1.1.0 -m "Release v1.1.0: New pricing features"

# Push everything
git push origin main --tags

# Merge back to develop
git checkout develop
git merge main

# Delete release branch
git branch -d release/v1.1.0
```

## GitHub Features

### 1. Pull Requests
```bash
# Push feature branch
git push origin feature/pricing-updates

# Create PR on GitHub web interface
# Include description, reviewers, and labels
```

### 2. GitHub Actions (CI/CD)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Netlify

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
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
    
    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      with:
        args: deploy --prod --dir=dist
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

### 3. Issue Templates
Create `.github/ISSUE_TEMPLATE/bug_report.md`:
```markdown
---
name: Bug report
about: Create a report to help us improve
title: '[BUG] '
labels: bug
assignees: ''
---

**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.
```

## Daily Workflow

### 1. Start New Feature
```bash
# Update local main
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/contact-form-validation

# Work on feature...
# Make commits...

# Push when ready
git push origin feature/contact-form-validation
```

### 2. Code Review Process
```bash
# Create Pull Request on GitHub
# Request reviews from team members
# Address feedback
# Merge when approved
```

### 3. Keep Branches Updated
```bash
# Update feature branch with latest main
git checkout feature/your-feature
git rebase main

# Or merge if you prefer
git merge main
```

## Useful Git Commands

### Viewing History
```bash
# View commit history
git log --oneline --graph

# View changes in a file
git log -p filename

# View who changed what
git blame filename
```

### Undoing Changes
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert a commit (safe for shared repos)
git revert commit-hash
```

### Stashing Changes
```bash
# Save work in progress
git stash

# Apply stashed changes
git stash pop

# List stashes
git stash list
```

## GitHub Repository Settings

### 1. Branch Protection Rules
- Require pull request reviews
- Require status checks to pass
- Require branches to be up to date
- Restrict pushes to main branch

### 2. Repository Secrets
Add these for CI/CD:
- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`

### 3. Labels for Issues/PRs
- `bug` - Something isn't working
- `enhancement` - New feature request
- `documentation` - Documentation updates
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed

## Best Practices

1. **Commit Often** - Small, focused commits
2. **Write Clear Messages** - Explain what and why
3. **Use Branches** - Never work directly on main
4. **Review Code** - Use pull requests for all changes
5. **Tag Releases** - Mark important milestones
6. **Document Changes** - Keep CHANGELOG.md updated
7. **Backup Important Branches** - Push regularly to GitHub

## Emergency Procedures

### Hotfix Process
```bash
# Create hotfix from main
git checkout main
git checkout -b hotfix/critical-bug-fix

# Make fix and test
# Commit changes
git commit -m "hotfix: resolve critical payment processing bug"

# Merge to main
git checkout main
git merge hotfix/critical-bug-fix

# Tag hotfix
git tag -a v1.0.1 -m "Hotfix v1.0.1: Critical bug fix"

# Push and deploy
git push origin main --tags

# Merge back to develop
git checkout develop
git merge main
```

This guide will help you maintain a clean, organized, and professional version control system for your Re:Healthify project!