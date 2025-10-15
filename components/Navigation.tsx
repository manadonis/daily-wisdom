import React from 'react';
import Link from 'next/link';

interface NavigationProps {
  showPrevious?: boolean;
}

export default function Navigation({ showPrevious = false }: NavigationProps) {
  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <Link href="/" className="nav-link">
        Today's Quote
      </Link>
      {showPrevious && (
        <Link href="/yesterday" className="nav-link">
          Yesterday's Quote
        </Link>
      )}
    </nav>
  );
}

