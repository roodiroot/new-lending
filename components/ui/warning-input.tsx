import { cn } from "@/lib/utils";

interface WarningInputProps extends React.HtmlHTMLAttributes<HTMLElement> {
  text?: string;
}
const WarningInput: React.FC<WarningInputProps> = ({
  text,
  className,
  ...props
}) => {
  if (!text) return null;
  return (
    <div
      {...props}
      className={cn("text-xs text-rose-500 sm:text-sm", className)}
    >
      {text}
    </div>
  );
};

export default WarningInput;
