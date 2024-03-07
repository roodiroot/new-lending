import Wrapper from '@/components/wrapper';
import ReviewCard from './review-card';

const reviewsList = [
  {
    id: 1,
    name: 'Анна Иванова',
    text: 'Матрёшка - профессиональная команда, которая помогла нам создать уникальный сайт для нашего малого бизнеса. Они были на связи на протяжении всего процесса и предоставили отличную поддержку после запуска. Рекомендую!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Петр Смирнов',
    text: 'Очень доволен результатом работы с этой компанией. Команда Матрёшки разработали для нас быстрый и качественный сайт, который превзошел все наши ожидания. Особенно впечатлила индивидуальная поддержка и внимание к деталям. Спасибо!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Екатерина Зайцева',
    text: 'Работа с этой командой была и есть настоящее удовольствие. Они профессионально подошли к созданию нашего сайта, учитывая все наши требования и пожелания. Результат оправдал все наши ожидания. Продолжаем работать уже 2 года. Клиентоориентированность на высоте. Рекомендуем всем нашим коллегам, кто развивает бизнес в интернете!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Ольга Сидорова',
    text: 'Очень благодарна команде Матрёшки за их профессионализм и терпение. Они помогли нам превратить нашу идею в реальность, создав уникальный и функциональный сайт. Мы получили много положительных отзывов от наших клиентов и уверены, что наше онлайн-присутствие стало ключом к нашему успеху.',
    rating: 5,
  },
];

interface OverviewSectionProps extends React.HtmlHTMLAttributes<HTMLElement> {}
const OverviewSection: React.FC<OverviewSectionProps> = ({
  className,
  ...props
}) => {
  return (
    <Wrapper {...props} className={className}>
      <div className="flex flex-col gap-y-8 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-3 sm:gap-x-8 sm:gap-y-12">
        <div className=" md:col-span-2">
          <h2 className="pt-3 pb-4 max-w-2xl text-5xl sm:text-7xl xl:text-8xl 2xl:text-9xl tracking-tight font-semibold">
            Почитайте, про нашу работу.
          </h2>
        </div>
        <ul className="contents">
          {reviewsList.map((review) => (
            <li key={review.id}>
              <ReviewCard
                name={review.name}
                text={review.text}
                rating={review.rating}
              />
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default OverviewSection;
