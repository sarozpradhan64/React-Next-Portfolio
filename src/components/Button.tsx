import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "font-medium flex justify-center items-center transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      color: {
        light: "bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 shadow-sm",
        primary: "bg-premium-gradient text-white hover:shadow-premium-hover hover:-translate-y-0.5 shadow-premium",
        secondary: "bg-secondary text-white hover:brightness-110 hover:shadow-lg shadow-md",
        danger: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
        warning: "bg-amber-400 text-slate-900 hover:bg-amber-500 shadow-sm",
        transparent: "bg-transparent text-white hover:bg-white/10",
      },
      outline: {
        light: "border border-slate-200 text-slate-400 hover:text-white hover:border-white",
        primary: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        secondary: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white",
        danger: "border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
        warning: "border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white",
      },
      size: {
        sm: "py-1.5 px-3 text-xs rounded-lg",
        md: "py-2.5 px-5 text-sm rounded-xl",
        lg: "py-3.5 px-8 text-base tracking-wide rounded-2xl",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "lg",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color" | "size">,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  color,
  outline,
  size,
  children,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({ color, outline, size, className })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;