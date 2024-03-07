import Container from '@/components/container';
import BenefitsItem from './benefits-item';
import Button from '@/components/ui/button';
import BenefitsCTA from './benefits-cta';
import Image from 'next/image';

interface BenefitsSectionProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const benefitsList = [
  {
    title: 'Гарантия надежности',
    description:
      'Предоставляем гарантию на 12 месяцев на каждый созданный нами сайт.',
  },
  {
    title: 'Персональный подход',
    description:
      'Нет шаблонных решений - каждый проект уникален и адаптирован под потребности вашего бизнеса.',
  },
  {
    title: 'Полный цикл',
    description:
      'Мы работаем начиная с концепции идеи и заканчивая запуском проекта и рекламой.',
  },
];

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  className,
  ...props
}) => {
  return (
    <Container {...props} className={className}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefitsList.map((i) => (
          <BenefitsItem
            key={i.title}
            title={i.title}
            description={i.description}
          />
        ))}
        <BenefitsCTA />
        <div className="relative rounded-[36px] p-4 sm:px-8 sm:py-36 lg:px-14 bg-accent-400 dark:bg-white-project">
          <h3 className="text-3xl text-white leading-[145%] font-semibold tracking-tight line-clamp-2 sm:text-4xl dark:text-accent">
            Фокус на <br /> результате
          </h3>
          <p className="mt-6 text-lg dark:text-accent text-white">
            Наша цель - не просто создать веб-сайт, а помочь вам достичь ваших
            бизнес-целей в интернете. Мы стремимся к результатам и работаем на
            них, учитывая ваши потребности и ожидания.
          </p>
        </div>
        <div className="relative w-full h-full rounded-[36px] overflow-hidden">
          <Image
            width={500}
            height={1000}
            src={'/images/benefits.jpg'}
            alt="Вставка картинки"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
};
export default BenefitsSection;
