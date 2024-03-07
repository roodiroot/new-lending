import Container from '@/components/container';
import PortfolioElement, { BGPortfolio } from './portfolio-element';

const portfolioList: {
  name: string;
  description: string;
  link: string;
  image: string;
  bg: BGPortfolio;
}[] = [
  {
    name: 'ДомЭксперт',
    description: 'Ремонт и отделка помещений в Москве и области.',
    link: 'https://home-expert.su/',
    image: '/images/portfolio/homeexpert.jpg',
    bg: BGPortfolio.light,
  },
  {
    name: 'Холод в Дом',
    description: 'Продажа и установка промышленных систем охлаждения',
    link: 'https://holod-vdom.ru/',
    image: '/images/portfolio/holod.jpg',
    bg: BGPortfolio.dark,
  },
  {
    name: 'Astraway',
    description: 'Крупный производитель экологичной, бытовой химии.',
    link: 'https://astraway.ru/',
    image: '/images/portfolio/astraway.jpg',
    bg: BGPortfolio.light,
  },
  {
    name: 'Kondish',
    description: 'Проектирование и монтaж вентиляции в Москве.',
    link: 'https://kondish.su/ventilation-systems',
    image: '/images/portfolio/kondish.jpg',
    bg: BGPortfolio.light,
  },
];

interface PortfolioSectionProps extends React.HtmlHTMLAttributes<HTMLElement> {}
const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  className,
  ...props
}) => {
  return (
    <Container {...props} className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-8">
        {portfolioList.map((i) => (
          <PortfolioElement
            key={i.link}
            image={i.image}
            title={i.name}
            description={i.description}
            link={i.link}
            bg={i.bg}
          />
        ))}
      </div>
    </Container>
  );
};

export default PortfolioSection;
