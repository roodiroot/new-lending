interface StepCardProps extends React.HtmlHTMLAttributes<HTMLElement> {
  step: number;
  title: string;
  text: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, text }) => {
  return (
    <div className='relative z-20 rounded-[36px] bg-white  flex flex-col w-full px-4 py-6 sm:px-9 sm:py-10 lg:px-12  transition duration-300 hover:text-white hover:bg-accent dark:bg-accent-300 dark:hover:bg-white dark:hover:text-accent'>
      <div className='text-end'>
        <p className='text-5xl xl:text-6xl'>0{step}</p>
      </div>
      <h3 className='max-w-[80%] text-4xl leading-[45px] xl:text-5xl xl:leading-[60px] font-semibold mt-16'>
        {title}
      </h3>
      <p className='text-lg mt-8'>{text}</p>
    </div>
  );
};

export default StepCard;
