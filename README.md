# Daily Wisdom

A minimalist web application that delivers one carefully curated quote per day from influential figures who have positively impacted humanity.

## Features

- **One Quote Daily**: A single, carefully selected quote updates automatically at midnight (user's local timezone)
- **Clean Design**: Minimalist interface focused on the wisdom itself
- **Yesterday's Quote**: Access to the previous day's quote
- **Copy to Clipboard**: Easy sharing with formatted text
- **Fully Responsive**: Beautiful reading experience on all devices
- **Accessible**: WCAG AAA compliant with full keyboard navigation and screen reader support
- **Performance Optimized**: Fast loading with static site generation

## Quote Sources

Our collection includes wisdom from:
- Social reformers and human rights advocates
- Scientific pioneers
- Philosophical thinkers
- Literary giants
- Innovators and visionaries
- Humanitarian leaders

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

Visit `http://localhost:3000` to see the application.

## Deployment

This application is optimized for deployment on Netlify:

1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

The application will automatically build and deploy.

## Project Structure

```
.
├── components/          # React components
│   ├── QuoteDisplay.tsx
│   └── Navigation.tsx
├── data/               # Quote database
│   └── quotes.json
├── pages/              # Next.js pages
│   ├── index.tsx
│   └── yesterday.tsx
├── styles/             # CSS styles
│   └── globals.css
├── types/              # TypeScript types
│   └── Quote.ts
└── utils/              # Utility functions
    └── dateUtils.ts
```

## Design Philosophy

Every feature serves a single purpose: making the daily quote more impactful and the experience more memorable. The application embodies:

- **Simplicity**: No distractions, just wisdom
- **Clarity**: Large, readable typography
- **Consistency**: Same experience every day
- **Accessibility**: Available to everyone

## Contributing

To add quotes to the database, edit `data/quotes.json` following the existing format:

```json
{
  "quote": "Quote text here",
  "author": "Author Name",
  "title": "Author's Primary Contribution"
}
```

## License

This project is open source and available for personal and educational use.

## Acknowledgments

Thanks to all the influential figures whose wisdom we share, and to everyone who visits daily to reflect on their words.

