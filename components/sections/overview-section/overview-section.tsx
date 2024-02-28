import Wrapper from "@/components/wrapper";
import ReviewCard from "./review-card";

const reviewsList = [
  {
    id: 1,
    name: "Максим Борисов",
    text:
      "Сотрудничество с вашей командой разработки было настоящим открытием! Ваш\n" +
      "  профессионализм и внимание к деталям помогли нам создать сайт, который\n" +
      "  привлек внимание наших клиентов и увеличил нашу конверсию.",
    rating: 5,
  },
  {
    id: 2,
    name: "Максим Борисов",
    text: "Сотрудничество с этой компанией оказалось для нас очень продуктивным. Их команда не только разработала отличный сайт, но и предоставила нам обучение по управлению контентом, что существенно упростило работу с сайтом. Мы рады, что выбрали именно их.",
    rating: 5,
  },
  {
    id: 3,
    name: "Максим Борисов",
    text: "Работа с данной компанией была для нас открытием. Они не только создали красивый и функциональный сайт, но и помогли нам разработать стратегию контент-маркетинга, что привело к увеличению трафика на нашем сайте в несколько раз. Очень рекомендую!",
    rating: 5,
  },
  {
    id: 4,
    name: "Максим Борисов",
    text: "Мы очень благодарны команде разработчиков за их терпение и профессионализм. Они не только учли все наши пожелания по дизайну и функционалу, но и подсказали много полезных идей, которые помогли сделать наш сайт еще лучше. Результат превзошел наши ожидания.",
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
      <div className='flex flex-col gap-y-8 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-3 sm:gap-x-8 sm:gap-y-12'>
        <div className=' md:col-span-2'>
          <h2 className='pt-3 pb-4 max-w-2xl text-5xl sm:text-7xl xl:text-8xl 2xl:text-9xl tracking-tight font-semibold'>
            Почитайте, про нашу работу.
          </h2>
        </div>
        <ul className='contents'>
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
