# Deployment Plan - NEPQ Training Guide

**Date:** October 23, 2025
**Project:** NEPQ Roth RMD Training Guide
**Repository:** https://github.com/L0v3Chrix/NEPQ-4-ROTHS-RMDS.git

---

## Deployment Strategy Overview

This project supports two deployment options:

1. **Vercel (Recommended)** - Zero-config Next.js deployment
2. **GitHub Pages (Alternative)** - Free static hosting

---

## Option 1: Vercel Deployment (Recommended)

### Why Vercel?
- ✅ Zero-configuration for Next.js
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Preview deployments for every git push
- ✅ Instant rollbacks
- ✅ Free tier sufficient for this project

### Prerequisites
1. GitHub repository connected: ✅
2. Vercel account (free): https://vercel.com/signup

### Deployment Steps

#### 1. Push Code to GitHub
```bash
cd /Users/chrixcolvard/projects/NEPQ-Roth-RMD/site

# Initialize git
git init

# Add remote
git remote add origin https://github.com/L0v3Chrix/NEPQ-4-ROTHS-RMDS.git

# Add all files
git add .

# Commit
git commit -m "feat: Initial NEPQ training guide Next.js implementation

- Convert HTML to Next.js 15 with TypeScript
- Component-based architecture
- Interactive flashcards and quiz
- Mobile-responsive design
- Comprehensive documentation in /docs"

# Push to main branch
git push -u origin main
```

#### 2. Deploy to Vercel

**Via Vercel Dashboard (Easiest):**

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select `L0v3Chrix/NEPQ-4-ROTHS-RMDS`
4. Configure project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `site` (IMPORTANT!)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `.next` (auto-filled)
   - **Environment Variables:** None needed
5. Click "Deploy"
6. Wait 2-3 minutes for build
7. Get live URL: `https://nepq-4-roths-rmds.vercel.app` (or custom domain)

**Via Vercel CLI (Alternative):**

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from /site folder)
cd /Users/chrixcolvard/projects/NEPQ-Roth-RMD/site
vercel

# Follow prompts:
# - Link to existing project? No
# - What's your project's name? nepq-training-guide
# - In which directory is your code located? ./
# - Auto-detected Next.js: Continue? Yes

# Deploy to production
vercel --prod
```

#### 3. Verify Deployment

**Checklist:**
- ✅ Site loads at provided URL
- ✅ All 8 sections navigate correctly
- ✅ Flashcards flip smoothly
- ✅ Quiz functionality works
- ✅ Mobile responsive (test on phone)
- ✅ No console errors in browser DevTools

---

## Option 2: GitHub Pages Deployment

### Why GitHub Pages?
- ✅ Completely free
- ✅ Hosted directly from GitHub repository
- ✅ Automatic deployments on git push
- ⚠️ Requires static export (loses some Next.js features)

### Configuration for GitHub Pages

#### 1. Update `next.config.ts`

```typescript
// site/next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',  // Enable static HTML export
  basePath: '/NEPQ-4-ROTHS-RMDS',  // Must match repository name
  images: {
    unoptimized: true  // Required for static export
  }
}

export default nextConfig
```

#### 2. Add GitHub Actions Workflow

Create `.github/workflows/deploy.yml` in repository root:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: |
          cd site
          npm ci

      - name: Build
        run: |
          cd site
          npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./site/out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### 3. Enable GitHub Pages

1. Go to repository: https://github.com/L0v3Chrix/NEPQ-4-ROTHS-RMDS
2. Click "Settings" tab
3. Click "Pages" in left sidebar
4. Under "Source", select:
   - Source: "GitHub Actions"
5. Save

#### 4. Deploy

```bash
# Push to trigger deployment
git add .
git commit -m "chore: Configure GitHub Pages deployment"
git push origin main

# Wait 2-3 minutes for Actions to complete
# Site will be live at: https://l0v3chrix.github.io/NEPQ-4-ROTHS-RMDS/
```

---

## Build Verification Checklist

Before deploying, ensure:

### Local Build Success
```bash
cd /Users/chrixcolvard/projects/NEPQ-Roth-RMD/site

# Install dependencies
npm install

# Run development server
npm run dev
# ✅ Open http://localhost:3000 and test all features

# Build for production
npm run build
# ✅ Ensure no TypeScript errors
# ✅ Ensure no build warnings

# Test production build locally
npm run start
# ✅ Test at http://localhost:3000
```

### TypeScript Validation
```bash
# Check for type errors
npm run type-check
# ✅ No errors should appear
```

### Linting (Optional)
```bash
# Check code quality
npm run lint
# ✅ Fix any errors before deploying
```

---

## Post-Deployment Testing

### Functionality Tests
- [ ] All 8 navigation tabs work
- [ ] Overview section displays correctly
- [ ] All 6 stage sections display questions
- [ ] Psychology toggles expand/collapse
- [ ] Flashcard mode loads
- [ ] Flashcards flip on click
- [ ] Previous/Next buttons work
- [ ] Progress bar updates
- [ ] Quiz mode loads
- [ ] Quiz answers can be selected
- [ ] Correct/incorrect feedback shows
- [ ] Quiz score tracks correctly
- [ ] Quiz results display at end
- [ ] Restart quiz works

### Performance Tests
- [ ] Lighthouse Performance: 90+
- [ ] Lighthouse Accessibility: 90+
- [ ] Lighthouse Best Practices: 90+
- [ ] Lighthouse SEO: 90+
- [ ] First Contentful Paint < 2s
- [ ] No layout shifts (CLS < 0.1)

### Mobile Tests
- [ ] Test on iPhone/iOS Safari
- [ ] Test on Android Chrome
- [ ] All buttons tappable (44x44px minimum)
- [ ] Tab navigation scrolls horizontally
- [ ] Flashcards flip smoothly
- [ ] Quiz options tap correctly
- [ ] No horizontal overflow
- [ ] Font sizes readable

### Cross-Browser Tests
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

---

## Custom Domain Setup (Optional)

### Add Custom Domain to Vercel

1. Go to Vercel Dashboard
2. Select project
3. Click "Settings" → "Domains"
4. Click "Add Domain"
5. Enter your domain (e.g., `nepq-training.yourdomain.com`)
6. Follow DNS configuration instructions:
   ```
   Type: CNAME
   Name: nepq-training (or @ for root)
   Value: cname.vercel-dns.com
   ```
7. Wait for DNS propagation (5-60 minutes)
8. Vercel auto-provisions SSL certificate

### Add Custom Domain to GitHub Pages

1. Buy domain from registrar
2. Add DNS records:
   ```
   Type: CNAME
   Name: nepq-training (or www)
   Value: l0v3chrix.github.io
   ```
3. In repository Settings → Pages:
   - Enter custom domain
   - Check "Enforce HTTPS"
4. Create `site/public/CNAME` file with domain:
   ```
   nepq-training.yourdomain.com
   ```

---

## Monitoring & Analytics (Future Enhancement)

### Add Google Analytics (Optional)

1. Create GA4 property
2. Get Measurement ID
3. Add to `site/app/layout.tsx`:

```tsx
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## Rollback Procedure

### Vercel Rollback
1. Go to Vercel Dashboard
2. Select project
3. Click "Deployments" tab
4. Find previous working deployment
5. Click "..." → "Promote to Production"
6. Instant rollback (< 30 seconds)

### GitHub Pages Rollback
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push origin main --force
```

---

## Troubleshooting Common Issues

### Issue: Build fails on Vercel
**Solution:**
1. Check build logs in Vercel dashboard
2. Ensure `package.json` has correct build script
3. Verify all dependencies in `package.json`
4. Test build locally: `npm run build`

### Issue: 404 on GitHub Pages
**Solution:**
1. Ensure `basePath` in `next.config.ts` matches repository name
2. Check GitHub Actions completed successfully
3. Verify GitHub Pages enabled in Settings
4. Wait 5-10 minutes for propagation

### Issue: Images not loading
**Solution:**
1. Ensure `images.unoptimized: true` in `next.config.ts` (for GitHub Pages)
2. Use relative paths, not absolute
3. Verify images in `/public` folder

### Issue: Styles not applying
**Solution:**
1. Check `globals.css` imported in `layout.tsx`
2. Verify Tailwind config correct
3. Clear browser cache
4. Check for CSS conflicts in DevTools

---

## Maintenance Plan

### Regular Updates
- **Monthly:** Check for Next.js security updates
- **Quarterly:** Review and update dependencies
- **Annually:** Audit content for accuracy

### Dependency Updates
```bash
# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Update Next.js specifically
npm install next@latest react@latest react-dom@latest

# Test after updates
npm run build
```

---

## Deployment Checklist Summary

### Pre-Deployment
- [ ] All features tested locally
- [ ] TypeScript compiles without errors
- [ ] Production build succeeds
- [ ] No console errors/warnings
- [ ] Mobile responsive verified
- [ ] Documentation complete

### Deployment
- [ ] Code pushed to GitHub
- [ ] Vercel/GitHub Pages configured
- [ ] Deployment succeeded
- [ ] Live URL accessible
- [ ] SSL certificate active

### Post-Deployment
- [ ] All functionality tested on live site
- [ ] Lighthouse scores 90+ across board
- [ ] Mobile devices tested
- [ ] Cross-browser tested
- [ ] Performance metrics acceptable

---

## Live URLs

**Production URL (Vercel):** TBD after deployment
**GitHub Pages URL:** https://l0v3chrix.github.io/NEPQ-4-ROTHS-RMDS/ (if configured)
**Repository:** https://github.com/L0v3Chrix/NEPQ-4-ROTHS-RMDS

---

**Last Updated:** October 23, 2025
**Status:** ✅ Deployment Plan Complete
**Next Step:** Initialize Next.js project and begin component development
