import { cn } from "@/lib/utils";
import ModalExitButton from "./modal-exit-button";

interface ModalWrapperProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}
const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "w-full overflow-hidden  bg-white-project  rounded-[35px] sm:rounded-[70px] py-6 sm:py-14 lg:py-32  dark:bg-accent-400",
        className
      )}
    >
      <div className=' flex flex-col px-4 sm:px-14 lg:px-32'>
        <div className='relative'>
          <ModalExitButton />
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
