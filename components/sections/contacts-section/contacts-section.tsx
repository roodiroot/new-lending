import Container from "@/components/container";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";
import Wrapper from "@/components/wrapper";
import FormContacts from "./form-contacts";

interface ContactsSectionProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const ContactsSection: React.FC<ContactsSectionProps> = ({
  className,
  ...props
}) => {
  return (
    <Container className={className} {...props}>
      <div className='relative overflow-hidden w-full h-full bg-accent-400 rounded-b-[35px] px-4 py-6 sm:px-14 sm:py-16 sm:rounded-b-[70px]'>
        <Spotlight
          className='-top-40 left-0 md:left-60 md:-top-20'
          fill='white'
        />
        <div className='flex items-start justify-between'>
          <div className='lg:max-w-2xl xl:max-w-3xl'>
            <h2 className='text-white pt-3  text-6xl sm:text-8xl xl:text-9xl 2xl:text-[140px] tracking-tight font-semibold'>
              Ну что? Начнем?
            </h2>
            <p className='text-white mt-10 text-2xl sm:text-3xl'>
              Оставьте свои контактные данные прямо сейчас, и наш менеджер
              свяжется с вами в ближайшее время, чтобы обсудить все детали!
            </p>
          </div>
          <div className='hidden shrink-0 w-64 h-64 bg-accent-300 rounded-[60px] lg:flex items-center justify-center'>
            <div className='text-xl font-semibold tracking-tight text-white'>
              Контакты
            </div>
          </div>
        </div>
        <div className='mt-40 xl:mt-44'>
          <FormContacts />
        </div>
      </div>
    </Container>
  );
};

export default ContactsSection;
