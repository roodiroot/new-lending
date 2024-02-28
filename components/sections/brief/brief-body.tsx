import Button from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { LuMoveRight } from "react-icons/lu";
import BriefForm from "./brief-form";
import Chips from "@/components/ui/chips";

interface BriefBodyProps extends React.HtmlHTMLAttributes<HTMLElement> {
  setStep: any;
  title: string;
  text: string;
  buttons: string[];
  nextStep: number;
  contacts?: boolean;
  setAnswer: Dispatch<SetStateAction<string[]>>;
  answer?: string[];
}

const BriefBody: React.FC<BriefBodyProps> = ({
  setStep,
  title,
  text,
  buttons,
  nextStep,
  contacts = false,
  setAnswer,
  answer,
}) => {
  return (
    <>
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20'
        fill='white'
      />

      <div className='w-full'>
        <div className='flex flex-col-reverse items-start justify-between gap-4 sm:flex-row'>
          <h3 className='sm:max-w-[350px] text-4xl leading-[45px] xl:text-5xl xl:leading-[60px] font-semibold  dark:text-accent text-white'>
            {title}
          </h3>
          <div className=' sm:text-5xl xl:text-6xl sm:font-medium dark:text-accent text-white text-end'>
            0{nextStep - 1}.
          </div>
        </div>
        <p className='text-lg mt-4 dark:text-accent text-white sm:max-w-[80%]'>
          {text}
        </p>
      </div>
      <div className={contacts ? "flex flex-col gap-2" : ""}>
        <ul className='flex flex-wrap gap-2 mt-10 '>
          {buttons.map((i) => (
            <li key={i}>
              <Chips
                onClick={() =>
                  setAnswer((state) => {
                    if (state.includes(i)) {
                      return state.filter((j) => j !== i);
                    }
                    return [...state, i];
                  })
                }
                className={cn(
                  answer?.includes(i)
                    ? "border-white bg-accent/70 text-white dark:border-accent dark:bg-accent/10 dark:text-accent"
                    : ""
                )}
              >
                {i}
              </Chips>
            </li>
          ))}
        </ul>
        {contacts && <BriefForm answer={answer} />}
      </div>
      {!contacts && (
        <Button
          onClick={() => setStep(nextStep === 4 ? 1 : nextStep)}
          className='mt-10 flex items-center bg-white text-accent dark:text-white dark:bg-accent'
        >
          Продолжить <LuMoveRight className='w-4 ml-2' />
        </Button>
      )}
    </>
  );
};

export default BriefBody;
