import { cn } from "@/lib/utils";

interface ModalTitleProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title?: string;
}
const ModalTitle: React.FC<ModalTitleProps> = ({
  title,
  className,
  ...props
}) => {
  return (
    <h3
      {...props}
      className={cn(
        "text-accent font-semibold tracking-tight text-4xl  max-w-[250px] sm:text-5xl lg:max-w-lg  lg:text-6xl  xl:text-7xl xl:max-w-2xl dark:text-white",
        className
      )}
    >
      {title}
    </h3>
  );
};

export default ModalTitle;
