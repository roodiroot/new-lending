import { cn } from "@/lib/utils";

interface ContainerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      {...props}
      className={cn(
        "max-w-[1920px] mx-auto w-full h-full px-4 sm:px-8 xl:px-16",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
