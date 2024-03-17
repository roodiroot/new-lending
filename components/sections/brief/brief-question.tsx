'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
import BriefBody from './brief-body';

const steps = [
  {
    title: 'Выбирите тип сайта?',
    text: 'Выбирите тот тип сайта, который наиболее точно отражает задачи вашего бизнеса',
    buttons: [
      'Многостраничный сайт',
      'Одностраничный сайт',
      'Лендинг',
      'Интернет магазин',
      'Не знаю',
    ],
  },
  {
    title: 'Уточните строки?',
    text: 'В какие строки вам нужен сайт? Выберете тот вариант который наиболее точно закрывает ваши потребности.',
    buttons: [
      'На этой неделе',
      'Чем быстрее',
      'Пару недель',
      'Месяц',
      'Сроки не имеют значения',
    ],
  },
  {
    title: 'Контактные данные?',
    text: 'Выбирите удобный спозоб связи, и заполните контактные данные.',
    buttons: ['Telegram', 'Позвоните на телефон', 'Whatsapp'],
    contacts: true,
  },
];

interface BriefQuestionProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const BriefQuestion: React.FC<BriefQuestionProps> = ({
  className,
  ...props
}) => {
  const [step, setStep] = useState(1);
  const [answer, setAnswer] = useState<string[]>([]);

  return (
    <div
      {...props}
      className={cn('flex gap-y-4 flex-col lg:gap-x-4 lg:flex-row', className)}
    >
      {steps.map((i, idx) => (
        <div
          key={i.title}
          className={cn(
            'relative  bg-white overflow-hidden rounded-[36px]  lg:min-w-[100px] xl:min-w-[250px] 2xl:min-w-[360px] dark:bg-accent-300',
            step === idx + 1
              ? 'flex-1 dark:bg-white bg-accent'
              : 'bg-white dark:bg-accent'
          )}
        >
          <div className="px-4 py-6 min-h-24 sm:px-14 sm:py-16">
            {step === idx + 1 ? (
              <BriefBody
                setStep={setStep}
                nextStep={idx + 2}
                title={i.title}
                text={i.text}
                buttons={i.buttons}
                contacts={i.contacts}
                setAnswer={setAnswer}
                answer={answer}
              />
            ) : (
              <div className="text-5xl xl:text-6xl text-accent dark:text-white text-end">
                0{idx + 1}.
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BriefQuestion;

const spring = {
  // type: "spring",
  // stiffness: 570,
  // damping: 30,

  type: 'spring',
  damping: 12,
  stiffness: 100,
};
