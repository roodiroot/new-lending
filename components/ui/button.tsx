import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  indigo?: boolean;
  outline?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  className,
  indigo,
  outline,
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "text-white text-lg bg-accent font-medium px-9 py-3.5 rounded-2xl dark:bg-white dark:text-accent transition",
        indigo &&
          "animate-shimmer dark:bg-[linear-gradient(110deg,#ffffff,45%,#CAD7F5,55%,#ffffff)] bg-[length:200%_100%] bg-[linear-gradient(110deg,#050F28,45%,#152755,55%,#050F28)]",
        outline &&
          "border text-base rounded-full dark:border-accent dark:hover:text-white dark:hover:bg-accent hover:text-accent hover:bg-white",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
