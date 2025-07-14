import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ className, variant = "primary", size = "default", children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 magnetic-button";
  
  const variants = {
    primary: "bg-neon text-dark hover:bg-green-400 hover:scale-105 shadow-lg hover:shadow-xl",
    secondary: "bg-dark text-white hover:bg-surface border border-surface",
    outline: "border-2 border-dark text-dark hover:bg-dark hover:text-white",
    ghost: "text-dark hover:bg-subtle",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;