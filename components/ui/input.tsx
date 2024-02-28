import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ invalid, className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "text-white text-lg flex h-[70px] w-full shadow-sm border-y border-accent-300 bg-inherit px-3 py-2 placeholder:text-white/40 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-accent/10 dark:text-accent dark:placeholder:text-accent/40",
          invalid && "border-rose-500 ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text?: string;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ text, className, ...props }, ref) => {
    return (
      <label
        {...props}
        ref={ref}
        className={cn(
          "text-xl font-medium text-accent dark:text-white",
          className
        )}
      >
        {text}
      </label>
    );
  }
);

Label.displayName = "Label";

export { Input, Label };
