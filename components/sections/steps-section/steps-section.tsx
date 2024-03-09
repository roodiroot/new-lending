import Wrapper from '@/components/wrapper';
import StepCard from './step-card';
import { BackgroundBeams } from '@/components/ui/background-beams';

interface StepsSectionProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const stepsList = [
  {
    id: 1,
    title: 'Быстрый сайт',
    text: 'Благодаря использованию современных технологий ваш сайт обеспечивает моментальную загрузку страниц, что максимизирует вероятность удержания посетителей.',
  },
  {
    id: 2,
    title: 'Красивый дизайн',
    text: 'Сайты, разработанные нами, автоматически адаптируются под все устройства и экраны, обеспечивая максимальную вовлеченность вашего клиента. Как на компьютере так и на мобильном.',
  },
  {
    id: 3,
    title: 'Улучшение SEO',
    text: 'Еще при разработке мы внедряем лучшие практики поисковой оптимизации  для вашего сайта, что улучшает его видимость в поисковых системах и привлекает максимум целевой аудитории.',
  },
];

const StepsSection: React.FC<StepsSectionProps> = ({ className, ...props }) => {
  return (
    <Wrapper {...props} className={className}>
      <div className="space-y-16">
        <h2 className="pt-3 max-w-2xl text-5xl sm:text-7xl xl:text-8xl 2xl:text-9xl tracking-tight font-semibold">
          Что мы предлагаем.
        </h2>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-4 xl:gap-12">
          {stepsList.map((step) => (
            <StepCard
              key={step.id}
              step={step.id}
              title={step.title}
              text={step.text}
            />
          ))}
        </div>
      </div>
      {/* <BackgroundBeams /> */}
    </Wrapper>
  );
};

export default StepsSection;
