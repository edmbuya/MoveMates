# GitHub Pages Deployment Guide

This Move Mates website is now a pure HTML/CSS/JavaScript static website ready for GitHub Pages hosting!

## Prerequisites
- GitHub account
- Repository for your website

## Setup Instructions

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Move Mates HTML website"
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
   - The GitHub Action will automatically deploy your static files
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Website Structure
```
├── index.html          # Main homepage
├── about.html          # About page
├── privacy.html        # Privacy Policy
├── terms.html          # Terms & Conditions
├── cookies.html        # Cookie Policy
├── styles.css          # All styling
├── script.js           # All functionality
└── .github/workflows/deploy.yml  # Auto-deployment
```

## Features Working on GitHub Pages
✅ Pure HTML/CSS/JavaScript (no build process required)
✅ Fully responsive design with mobile navigation
✅ Hero carousel with auto-advance
✅ Tour filtering by category (Private, Group, Vehicle Hire)
✅ Interactive booking forms with localStorage
✅ Contact forms with localStorage
✅ WhatsApp floating button (+254 112 344 722)
✅ All legal pages (Privacy, Terms, Cookies)
✅ Smooth scrolling navigation
✅ Toast notifications for form submissions

## Local Testing
Open `index.html` in any web browser - no server required!

Your website will work perfectly on GitHub Pages since it's completely static with no dependencies!