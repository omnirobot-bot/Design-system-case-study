import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon } from 'lucide-react';
import { getPlaceholderImage } from '@/app/config/placeholders';

// Use placeholders for GitHub Pages deployment
// Replace with actual images: /public/images/[hash].png
const darkThemeImg = getPlaceholderImage('2859fd2813b789422148dc7593a9a22997bbc9a5.png');
const lightThemeImg = getPlaceholderImage('b5333ffd9dc52b8d9f5946724102aa9e32735d46.png');

export function ThemeComparison() {
  const [dividerPosition, setDividerPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({ light: false, dark: false });
  const containerRef = useRef<HTMLDivElement>(null);

  // Debug: log image sources
  useEffect(() => {
    console.log('Light image:', lightThemeImg);
    console.log('Dark image:', darkThemeImg);
  }, []);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            setTimeout(() => {
              const duration = 1200;
              const startTime = Date.now();
              
              const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                const easeInOut = (t: number) => {
                  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                };
                
                const easedProgress = easeInOut(progress);
                
                let position;
                if (progress < 0.5) {
                  position = 50 + (10 * (easedProgress * 2));
                } else {
                  const returnProgress = (progress - 0.5) * 2;
                  position = 60 - (10 * easeInOut(returnProgress));
                }
                
                setDividerPosition(position);
                
                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };
              
              requestAnimationFrame(animate);
            }, 300);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current || isLocked) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    setDividerPosition(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    setIsLocked(false);
    updatePosition(e.clientX);
  };

  const handleClick = () => {
    setIsLocked(true);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length === 0) return;
    updatePosition(e.touches[0].clientX);
  };

  // Global mouse tracking - always active
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isLocked && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setDividerPosition(percentage);
      }
    };

    document.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isLocked]);

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none"
      style={{
        height: '440px',
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        touchAction: 'none',
        overflow: 'hidden',
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* Dark theme - bottom layer */}
      <div 
        className="absolute inset-0"
        style={{ width: '100%', height: '100%' }}
      >
        <img
          src={darkThemeImg}
          alt="Dark theme"
          onLoad={() => {
            console.log('Dark image loaded');
            setImagesLoaded(prev => ({ ...prev, dark: true }));
          }}
          onError={() => console.error('Dark image failed to load')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            userSelect: 'none',
            pointerEvents: 'none',
            display: 'block',
          }}
          draggable={false}
        />
      </div>

      {/* Light theme - top layer with clip */}
      <div
        className="absolute inset-0"
        style={{
          width: '100%',
          height: '100%',
          clipPath: `inset(0 ${100 - dividerPosition}% 0 0)`,
        }}
      >
        <img
          src={lightThemeImg}
          alt="Light theme"
          onLoad={() => {
            console.log('Light image loaded');
            setImagesLoaded(prev => ({ ...prev, light: true }));
          }}
          onError={() => console.error('Light image failed to load')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            userSelect: 'none',
            pointerEvents: 'none',
            display: 'block',
          }}
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0"
        style={{
          left: `${dividerPosition}%`,
          width: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}
      >
        {/* Handle */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: '48px',
            height: '48px',
            backgroundColor: 'var(--color-surface)',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            cursor: 'ew-resize',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none',
            touchAction: 'none',
            zIndex: 10,
            pointerEvents: 'auto',
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          onMouseLeave={handleMouseLeave}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ pointerEvents: 'none' }}>
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.6"
            />
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div
        className="absolute top-4 left-4 px-3 py-1.5"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 'var(--radius-md)',
          fontFamily: 'var(--font-family-sans)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 600,
          color: '#000',
          zIndex: 11,
        }}
      >
        Light
      </div>
      
      <div
        className="absolute top-4 right-4 px-3 py-1.5"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderRadius: 'var(--radius-md)',
          fontFamily: 'var(--font-family-sans)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 600,
          color: '#fff',
          zIndex: 11,
        }}
      >
        Dark
      </div>

      {/* Debug info */}
      {(!imagesLoaded.light || !imagesLoaded.dark) && (
        <div className="absolute bottom-4 left-4 text-xs text-white/50" style={{ zIndex: 11 }}>
          Loading: {!imagesLoaded.light && 'Light'} {!imagesLoaded.dark && 'Dark'}
        </div>
      )}
    </div>
  );
}