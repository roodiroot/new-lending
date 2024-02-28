import Wrapper from "@/components/wrapper";
import StepCard from "./step-card";
import { BackgroundBeams } from "@/components/ui/background-beams";

interface StepsSectionProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const stepsList = [
  {
    id: 1,
    title: "Изучение нишы",
    text: "Мы проводим глубокое исследование вашей целевой аудитории и конкурентов, чтобы понять особенности вашего рынка. Собераем информацию о том, что работает в вашей нише и что не работает, чтобы выделить ключевые факторы успеха.",
  },
  {
    id: 2,
    title: "Разработка сайта",
    text: "Мы разработаем информационную архитектуру вашего сайта, определив страницы и контент, которые будут на вашем сайте, чтобы обеспечить лучший пользовательский опыт. Изходя из полученной ранее информации",
  },
  {
    id: 3,
    title: "Запуск рекламы",
    text: "Мы будем создавать и оптимизировать кампании на основе данных и аналитики для достижения максимальной отдачи от рекламного бюджета, чтобы помочь вашему бизнесу расти и развиваться.",
  },
];

const StepsSection: React.FC<StepsSectionProps> = ({ className, ...props }) => {
  return (
    <Wrapper {...props} className={className}>
      <div className='space-y-16'>
        <h2 className='pt-3 max-w-2xl text-5xl sm:text-7xl xl:text-8xl 2xl:text-9xl tracking-tight font-semibold'>
          Три шага до старта.
        </h2>
        <div className='flex flex-col gap-8 lg:flex-row lg:gap-4 xl:gap-12'>
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
