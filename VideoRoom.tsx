import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = "font-display font-semibold rounded-full transition-all transform active:scale-95 focus:outline-none shadow-md hover:shadow-lg border-b-4 active:border-b-0 active:translate-y-1";

  const variants = {
    primary: "bg-torah-gold border-yellow-600 text-torah-blue-deep hover:brightness-110",
    secondary: "bg-torah-blue-light border-blue-400 text-white hover:brightness-110",
    outline: "bg-white border-torah-blue-light text-torah-blue-light border-2 hover:bg-blue-50",
    danger: "bg-torah-pink border-red-400 text-white hover:brightness-110",
    success: "bg-torah-green border-green-600 text-white hover:brightness-110",
  };

  const sizes = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-lg",
    lg: "px-8 py-3 text-xl",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}
    >
      {children}
    </button>
  );
};