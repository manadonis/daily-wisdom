# Quick Start Guide

## Installation & Running

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

This creates an optimized static site in the `out` directory.

## Deploy to Netlify

### Option 1: Deploy via Git (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
6. Click "Deploy site"

### Option 2: Manual Deploy
1. Run `npm run build` locally
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `out` folder

## Features to Test

1. **Daily Quote Display**: Visit the homepage to see today's quote
2. **Copy Functionality**: Click "Copy Quote" to copy the formatted text
3. **Yesterday's Quote**: Click "Yesterday's Quote" in navigation
4. **Responsive Design**: Resize your browser or test on mobile
5. **Keyboard Navigation**: Tab through the interface
6. **Midnight Refresh**: The quote automatically updates at midnight

## Customization

### Adding More Quotes
Edit `data/quotes.json` and add entries following this format:
```json
{
  "quote": "Your quote text here",
  "author": "Author Name",
  "title": "Author's Primary Contribution"
}
```

### Changing Colors
Edit `styles/globals.css`:
- Background: `#fafafa`
- Text: `#1a1a1a`
- Button: `#1a1a1a`

### Changing Fonts
Edit `pages/_document.tsx` to use different Google Fonts.

## Performance

The application is optimized for:
- Fast loading (< 1 second)
- Static site generation
- Minimal JavaScript
- No external dependencies beyond fonts

## Accessibility

- WCAG AAA compliant
- Full keyboard navigation
- Screen reader optimized
- High contrast mode support
- Reduced motion support

