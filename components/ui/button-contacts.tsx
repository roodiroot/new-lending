import { cn } from "@/lib/utils";

interface ButtonContactsProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  disabled: boolean;
}
const ButtonContacts: React.FC<ButtonContactsProps> = ({
  disabled,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      type='submit'
      disabled={disabled}
      className={cn(
        "h-[70px] bg-white px-6 rounded-full  font-semibold tracking-tight dark:text-accent  lg:rounded-lg lg:rounded-r-[35px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      {props.children}
    </button>
  );
};

export default ButtonContacts;
