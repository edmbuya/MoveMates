# GitHub Pages Deployment Guide

This Move Mates website is now fully static and ready for GitHub Pages hosting!

## Prerequisites
- GitHub account
- Repository for your website

## Setup Instructions

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Move Mates static website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"

3. **Automatic Deployment:**
   - The GitHub Action will automatically build and deploy your site
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Manual Build (Optional)
If you want to build locally:
```bash
vite build
```
The static files will be in `dist/public/` directory.

## Features Working on GitHub Pages
✅ Static website (no backend required)
✅ Tour and accommodation browsing
✅ Booking forms (saved to browser storage)  
✅ Contact forms (saved to browser storage)
✅ WhatsApp integration
✅ Responsive design
✅ All legal pages

Your website will work perfectly on GitHub Pages since it's completely static with no database dependencies!