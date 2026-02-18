import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DSButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'outline';
  disabled?: boolean;
  leadingIcon?: LucideIcon;
  trailingIcon?: LucideIcon;
  className?: string;
}

export function DSButton({
  children,
  variant = 'primary',
  disabled = false,
  leadingIcon: LeadingIconComponent,
  trailingIcon: TrailingIconComponent,
  className = '',
}: DSButtonProps) {
  const getVariantStyles = () => {
    if (disabled) {
      return 'bg-[var(--color-neutral-400)] text-[var(--color-neutral-600)] cursor-not-allowed';
    }

    switch (variant) {
      case 'primary':
        return 'bg-[var(--color-primary)] text-white';
      case 'secondary':
        return 'bg-transparent text-[var(--color-text-primary)] border-[1px] border-[var(--color-border)]';
      case 'success':
        return 'bg-[var(--color-success)] text-white';
      case 'warning':
        return 'bg-[var(--color-warning)] text-[var(--color-text-primary)]';
      case 'danger':
        return 'bg-[var(--color-danger)] text-white';
      case 'ghost':
        return 'bg-transparent text-[var(--color-text-primary)]';
      case 'outline':
        return 'bg-transparent text-[var(--color-primary)] border-[1px] border-[var(--color-primary)]';
      default:
        return '';
    }
  };

  return (
    <div
      className={`
        content-stretch flex items-center justify-center relative size-full
        gap-[8px]
        px-[24px]
        py-[12px]
        rounded-[4px]
        ${getVariantStyles()}
        ${className}
      `}
      data-name="Button"
    >
      {/* Shadow overlay - exact from Figma */}
      <div 
        aria-hidden="true" 
        className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[4px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0.16)]"
      />
      
      {/* Leading Icon */}
      {LeadingIconComponent && (
        <div className="relative shrink-0 size-[24px]">
          <LeadingIconComponent className="w-full h-full" />
        </div>
      )}
      
      {/* Button Text - exact structure from Figma */}
      <div 
        className="flex flex-col justify-center leading-[0] relative shrink-0 text-center"
        style={{
          fontFamily: 'var(--font-family-sans)',
          fontWeight: 'bold',
          fontSize: '16px',
        }}
      >
        <p className="leading-[20px]">{children}</p>
      </div>
      
      {/* Trailing Icon */}
      {TrailingIconComponent && (
        <div className="relative shrink-0 size-[24px]">
          <TrailingIconComponent className="w-full h-full" />
        </div>
      )}
    </div>
  );
}