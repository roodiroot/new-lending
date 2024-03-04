import Image from 'next/image';
import { Metadata } from 'next';

import { Icons } from '@/components/icons';
import Wrapper from '@/components/wrapper';

export const metadata: Metadata = {
  title: 'Наши контакты',
  description:
    'Контактные данные веб студии. Вы всегда можете обратиться к нам по телефону или в соц сетях. Мы рады каждому клиенту.',
};

const ContactsPage = () => {
  return (
    <Wrapper className="mt-9">
      <div className="w-full max-w-2xl mx-auto lg:max-w-none">
        <div className="space-y-10">
          <h1 className="pt-3 max-w-2xl text-5xl sm:text-6xl 2xl:text-7xl tracking-tight font-semibold">
            Контакты.
          </h1>
          <div className="flex flex-col-reverse gap-y-12 lg:flex-row lg:gap-x-5">
            <div className="relative rounded-[36px] overflow-hidden">
              <Image
                src="/images/contacts.jpg"
                className=" w-full h-full object-cover lg:aspect-1 lg:max-w-[520px]"
                alt="contacts"
                width={500}
                height={500}
              />
            </div>
            <div className=" flex-1 flex flex-col gap-8 justify-between lg:min-w-[600px] lg:gap-y-20 lg:px-4  xl:px-10 lg:py-8">
              <p className="text-lg">
                Станьте владельцем своего собственного космического сайта!
                Разверните ваш бизнес во вселенной интернета с нашим
                эксклюзивным предложением по созданию сайта прямо сейчас!
              </p>
              <div className="space-y-3">
                <a
                  href="https://matryoshka-studio.ru"
                  className="flex gap-2 items-center"
                  target="_blank"
                >
                  <Icons.globe className="stroke-accent/30 dark:stroke-white" />
                  <p className="text-xl font-medium tracking-tight">
                    matryoshka-studio.ru
                  </p>
                </a>
                <a
                  href="mailto:hello@matryoshka-studio.ru"
                  className="flex gap-2 items-center"
                  target="_blank"
                >
                  <Icons.mail className="stroke-accent/30 dark:stroke-white" />
                  <p className="text-xl font-medium tracking-tight">
                    hello@matryoshka-studio.ru
                  </p>
                </a>

                <div className="flex gap-2 items-center">
                  <Icons.building className="stroke-accent/30 dark:stroke-white" />
                  <p className="text-xl font-medium tracking-tight">
                    Республика Мордовия, г. Саранск ул. Советская 75, оф. 501
                  </p>
                </div>
                <a href="tel:+79875704514" className="flex gap-2 items-center">
                  <Icons.phone className="stroke-accent/30 dark:stroke-white" />
                  <p className="text-xl font-medium tracking-tight">
                    + 7 (987) 570-45-14
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactsPage;
