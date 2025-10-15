/**
 * Gets the day of the year for a given date (1-365/366)
 */
export function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

/**
 * Gets today's quote index (0-364)
 */
export function getTodayQuoteIndex(): number {
  const today = new Date();
  const dayOfYear = getDayOfYear(today);
  // Normalize to 0-364 index (handle leap years by wrapping day 366 to 365)
  return (dayOfYear - 1) % 365;
}

/**
 * Gets yesterday's quote index (0-364)
 */
export function getYesterdayQuoteIndex(): number {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const dayOfYear = getDayOfYear(yesterday);
  return (dayOfYear - 1) % 365;
}

/**
 * Formats a date for display
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Gets the time until midnight in milliseconds
 */
export function getTimeUntilMidnight(): number {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  return midnight.getTime() - now.getTime();
}

