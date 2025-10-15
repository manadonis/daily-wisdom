import React, { useState, useEffect } from 'react';
import { Quote } from '../types/Quote';
import QuoteArt from './QuoteArt';

interface QuoteDisplayProps {
  quote: Quote;
  showDate?: boolean;
  dateLabel?: string;
}

export default function QuoteDisplay({ quote, showDate = false, dateLabel }: QuoteDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const textToCopy = `"${quote.quote}" - ${quote.author}`;
    
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="quote-container">
      {showDate && dateLabel && (
        <div className="date-label">{dateLabel}</div>
      )}
      
      <QuoteArt quote={quote.quote} author={quote.author} />
      
      <blockquote className="quote-text">
        "{quote.quote}"
      </blockquote>
      
      <div className="author-section">
        <div className="author-name">{quote.author}</div>
        <div className="author-title">{quote.title}</div>
      </div>
      
      <button 
        className="copy-button" 
        onClick={handleCopy}
        aria-label="Copy quote to clipboard"
      >
        {copied ? 'Copied!' : 'Copy Quote'}
      </button>
    </div>
  );
}

