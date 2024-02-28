import { cn } from "@/lib/utils";

interface ChipsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Chips: React.FC<ChipsProps> = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        "rounded-full border border-accent bg-white px-2 py-0.5 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Chips;
