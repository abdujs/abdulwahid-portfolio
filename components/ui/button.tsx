import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary";
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ variant = "default", children, ...props }) => {
  const base = "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors";
  const styles =
    variant === "secondary"
      ? `${base} bg-transparent border border-current text-current hover:bg-black/5 dark:hover:bg-white/5`
      : `${base} bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black`;

  return (
    <button {...props} className={[styles, (props.className || "")].join(" ")}> 
      {children}
    </button>
  );
};

export default Button;
