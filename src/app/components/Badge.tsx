import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'blue' | 'purple' | 'green' | 'yellow' | 'neutral';
  variant?: 'solid' | 'outline' | 'glow';
}

export function Badge({ children, color = 'neutral', variant = 'outline' }: BadgeProps) {
  const colorClasses = {
    blue: {
      solid: 'bg-[#3B82F6] text-white',
      outline: 'border-[#3B82F6]/40 text-[#60A5FA] bg-[#3B82F6]/10',
      glow: 'border-[#3B82F6]/60 text-[#60A5FA] bg-[#3B82F6]/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]',
    },
    purple: {
      solid: 'bg-[#A855F7] text-white',
      outline: 'border-[#A855F7]/40 text-[#C084FC] bg-[#A855F7]/10',
      glow: 'border-[#A855F7]/60 text-[#C084FC] bg-[#A855F7]/20 shadow-[0_0_20px_rgba(168,85,247,0.3)]',
    },
    green: {
      solid: 'bg-[#10B981] text-white',
      outline: 'border-[#10B981]/40 text-[#34D399] bg-[#10B981]/10',
      glow: 'border-[#10B981]/60 text-[#34D399] bg-[#10B981]/20 shadow-[0_0_20px_rgba(16,185,129,0.3)]',
    },
    yellow: {
      solid: 'bg-[#F59E0B] text-white',
      outline: 'border-[#F59E0B]/40 text-[#FBBF24] bg-[#F59E0B]/10',
      glow: 'border-[#F59E0B]/60 text-[#FBBF24] bg-[#F59E0B]/20 shadow-[0_0_20px_rgba(245,158,11,0.3)]',
    },
    neutral: {
      solid: 'bg-[#6B7280] text-white',
      outline: 'border-white/20 text-white/80 bg-white/5',
      glow: 'border-white/30 text-white/90 bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)]',
    },
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colorClasses[color][variant]}`}
      style={{ fontFamily: 'var(--font-family-mono)' }}
    >
      {children}
    </span>
  );
}
