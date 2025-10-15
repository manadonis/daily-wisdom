import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import QuoteDisplay from '../components/QuoteDisplay';
import Navigation from '../components/Navigation';
import quotes from '../data/quotes.json';
import { getYesterdayQuoteIndex, formatDate } from '../utils/dateUtils';
import type { Quote } from '../types/Quote';

export default function Yesterday() {
  const [yesterdayQuote, setYesterdayQuote] = useState<Quote | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Get yesterday's quote
    const quoteIndex = getYesterdayQuoteIndex();
    setYesterdayQuote(quotes[quoteIndex]);
  }, []);

  if (!isClient || !yesterdayQuote) {
    // Return a placeholder during SSR to avoid hydration mismatch
    return (
      <div className="container">
        <div className="quote-wrapper">
          <Navigation showPrevious={false} />
          <div className="loading">Loading yesterday's wisdom...</div>
        </div>
      </div>
    );
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayDate = formatDate(yesterday);

  return (
    <>
      <Head>
        <title>Daily Wisdom - Yesterday's Quote</title>
        <meta name="description" content={`Yesterday's quote: ${yesterdayQuote.quote} - ${yesterdayQuote.author}`} />
      </Head>

      <main className="container">
        <div className="quote-wrapper">
          <Navigation showPrevious={false} />
          
          <h1 className="visually-hidden">Daily Wisdom - {yesterdayDate}</h1>
          
          <QuoteDisplay 
            quote={yesterdayQuote} 
            showDate={true}
            dateLabel={yesterdayDate}
          />
        </div>
      </main>
    </>
  );
}

