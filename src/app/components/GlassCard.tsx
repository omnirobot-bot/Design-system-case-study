import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'light';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export function GlassCard({ children, className = '', variant = 'default', padding = 'lg' }: GlassCardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
  };

  const variantClasses = {
    default: 'bg-[rgba(15,20,35,0.5)]',
    light: 'bg-[rgba(25,35,55,0.5)]',
  };

  return (
    <div
      className={`rounded-[24px] border border-white/8 backdrop-blur-sm ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
      style={{
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      }}
    >
      {children}
    </div>
  );
}
