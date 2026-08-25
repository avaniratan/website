import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-warm-coral/50 active:scale-95';
  
  const variants = {
    primary: 'bg-warm-coral text-white hover:bg-warm-coral/90 shadow-sm',
    secondary: 'bg-warm-sand text-deep-violet hover:bg-warm-sand/90',
    outline: 'border border-muted-violet/30 text-deep-violet hover:bg-muted-violet/5',
    ghost: 'text-deep-violet hover:bg-muted-violet/5'
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-xs md:text-sm',
    md: 'px-6 py-2.5 text-sm md:text-base',
    lg: 'px-8 py-3 text-base md:text-lg'
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
