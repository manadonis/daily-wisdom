import React, { useEffect, useRef } from 'react';

interface QuoteArtProps {
  quote: string;
  author: string;
}

export default function QuoteArt({ quote, author }: QuoteArtProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Seeded random number generator
    const seed = hashString(quote + author);
    let randomState = seed;
    
    function seededRandom(): number {
      randomState = (randomState * 9301 + 49297) % 233280;
      return randomState / 233280;
    }

    // Clear canvas
    ctx.fillStyle = '#fafafa';
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Generate color palette based on quote
    const hue = seededRandom() * 360;
    const colors = [
      `hsla(${hue}, 70%, 60%, 0.6)`,
      `hsla(${(hue + 60) % 360}, 70%, 65%, 0.5)`,
      `hsla(${(hue + 120) % 360}, 70%, 70%, 0.4)`,
      `hsla(${(hue + 180) % 360}, 70%, 65%, 0.5)`,
      `hsla(${(hue + 240) % 360}, 70%, 60%, 0.6)`,
    ];

    // Drawing style based on quote length and content
    const quoteLength = quote.length;
    const complexity = Math.min(Math.floor(quoteLength / 20) + 3, 12);
    
    // Create flowing organic shapes
    for (let i = 0; i < complexity; i++) {
      const startX = seededRandom() * rect.width;
      const startY = seededRandom() * rect.height;
      const color = colors[Math.floor(seededRandom() * colors.length)];
      
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      
      // Create smooth curves
      const points = Math.floor(seededRandom() * 6) + 4;
      for (let j = 0; j < points; j++) {
        const cpX1 = seededRandom() * rect.width;
        const cpY1 = seededRandom() * rect.height;
        const cpX2 = seededRandom() * rect.width;
        const cpY2 = seededRandom() * rect.height;
        const endX = seededRandom() * rect.width;
        const endY = seededRandom() * rect.height;
        
        ctx.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, endX, endY);
      }
      
      ctx.closePath();
      
      // Fill with gradient
      const gradient = ctx.createRadialGradient(
        startX, startY, 0,
        startX, startY, rect.width * 0.5
      );
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    // Add circular accents
    const numCircles = Math.floor(seededRandom() * 8) + 5;
    for (let i = 0; i < numCircles; i++) {
      const x = seededRandom() * rect.width;
      const y = seededRandom() * rect.height;
      const radius = (seededRandom() * 80) + 20;
      const color = colors[Math.floor(seededRandom() * colors.length)];
      
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }

    // Add flowing lines
    const numLines = Math.floor(seededRandom() * 15) + 10;
    for (let i = 0; i < numLines; i++) {
      const startX = seededRandom() * rect.width;
      const startY = seededRandom() * rect.height;
      const color = colors[Math.floor(seededRandom() * colors.length)];
      
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      
      const segments = Math.floor(seededRandom() * 4) + 3;
      for (let j = 0; j < segments; j++) {
        const cpX = seededRandom() * rect.width;
        const cpY = seededRandom() * rect.height;
        const endX = seededRandom() * rect.width;
        const endY = seededRandom() * rect.height;
        
        ctx.quadraticCurveTo(cpX, cpY, endX, endY);
      }
      
      ctx.strokeStyle = color;
      ctx.lineWidth = seededRandom() * 3 + 1;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    }

    // Add subtle overlay pattern
    ctx.globalCompositeOperation = 'overlay';
    for (let i = 0; i < 50; i++) {
      const x = seededRandom() * rect.width;
      const y = seededRandom() * rect.height;
      const radius = seededRandom() * 3 + 1;
      
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${seededRandom() * 0.3})`;
      ctx.fill();
    }
    
    ctx.globalCompositeOperation = 'source-over';

  }, [quote, author]);

  return (
    <div className="quote-art-container">
      <canvas 
        ref={canvasRef} 
        className="quote-art-canvas"
        aria-label="Generative art inspired by the quote"
      />
    </div>
  );
}

// Hash function to convert string to number
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

