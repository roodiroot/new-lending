import { Icons } from "@/components/icons";

interface ReviewCardProps extends React.HtmlHTMLAttributes<HTMLElement> {
  name: string;
  text: string;
  rating: number;
}
const ReviewCard: React.FC<ReviewCardProps> = ({ name, text, rating }) => {
  return (
    <div className='px-6 py-8 space-y-4 bg-white rounded-[36px] dark:bg-accent-300'>
      <p className='text-lg'>{text}</p>
      <div className='flex flex-col gap-y-1 items-end'>
        <p className='text-xl font-medium'>{name}</p>
        <div className='flex gap-x-[1px]'>
          <Icons.star />
          <Icons.star />
          <Icons.star />
          <Icons.star />
          <Icons.star />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
