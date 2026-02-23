import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'default', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    default: 'bg-[var(--color-primary)] text-white hover:bg-[color-mix(in_srgb,var(--color-primary)_90%,white_10%)] shadow-md hover:shadow-lg',
    secondary: 'bg-[var(--color-secondary)] text-white hover:bg-[color-mix(in_srgb,var(--color-secondary)_90%,white_10%)]',
    outline: 'border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-white hover:bg-[color-mix(in_srgb,var(--color-primary)_10%,white_90%)]',
    ghost: 'hover:bg-[var(--color-tertiary)] hover:text-[var(--color-primary)]',
    destructive: 'bg-[var(--color-tertiary)] text-white hover:bg-[color-mix(in_srgb,var(--color-tertiary)_80%,var(--color-primary)_20%)]',
  };

  const sizes = {
    sm: 'h-9 px-3 py-2 text-sm',
    md: 'h-11 px-4 py-2.5',
    lg: 'h-12 px-8 py-3 text-base',
    icon: 'h-10 w-10',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}