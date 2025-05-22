import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "font-medium flex justify-center items-center shadow-sm shadow-[rgba(16,24,40,0.05)]",
  {
    variants: {
      color: {
        light: "bg-white border border-gray-300 text-gray-700",
        primary: "bg-primary border border-transparent text-white",
        secondary: "bg-secondary border border-transparent text-white",
        danger: "bg-red-500 border border-red-500 text-white",
        warning: "bg-warning text-white",
        transparent: "bg-transparent text-white",
      },
      outline: {
        light: "border border-gray-300 text-gray-700",
        primary: "border border-transparent text-primary",
        secondary: "border border-transparent text-primary",
        danger: "border border-red-500 text-white",
        warning: "text-dark",
      },
      size: {
        sm: "py-1 px-2 text-xs rounded",
        md: "py-2 px-3.5 text-sm rounded",
        lg: "py-3 px-5 text-base tracking-wider rounded",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "lg",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
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