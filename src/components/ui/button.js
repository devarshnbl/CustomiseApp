import React from "react";

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    const variantStyle = variants[variant] || variants.default;
    const sizeStyle = sizes[size] || sizes.default;

    return (
      <button
        className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

export { Button };