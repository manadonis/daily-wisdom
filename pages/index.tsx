import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import QuoteDisplay from '../components/QuoteDisplay';
import Navigation from '../components/Navigation';
import quotes from '../data/quotes.json';
import { getTodayQuoteIndex, getTimeUntilMidnight, formatDate } from '../utils/dateUtils';
import type { Quote } from '../types/Quote';

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Get today's quote
    const quoteIndex = getTodayQuoteIndex();
    setCurrentQuote(quotes[quoteIndex]);

    // Set up midnight refresh
    const timeUntilMidnight = getTimeUntilMidnight();
    const midnightTimer = setTimeout(() => {
      // Refresh the page at midnight
      window.location.reload();
    }, timeUntilMidnight);

    return () => clearTimeout(midnightTimer);
  }, []);

  if (!isClient || !currentQuote) {
    // Return a placeholder during SSR to avoid hydration mismatch
    return (
      <div className="container">
        <div className="quote-wrapper">
          <Navigation showPrevious={true} />
          <div className="loading">Loading today's wisdom...</div>
        </div>
      </div>
    );
  }

  const today = formatDate(new Date());

  return (
    <>
      <Head>
        <title>Daily Wisdom - Today's Quote</title>
        <meta name="description" content={`Today's quote: ${currentQuote.quote} - ${currentQuote.author}`} />
      </Head>

      <main className="container">
        <div className="quote-wrapper">
          <Navigation showPrevious={true} />
          
          <h1 className="visually-hidden">Daily Wisdom - {today}</h1>
          
          <QuoteDisplay 
            quote={currentQuote} 
            showDate={true}
            dateLabel={today}
          />
        </div>
      </main>
    </>
  );
}

