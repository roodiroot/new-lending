import { Metadata } from 'next';

import BriefQuestion from '@/components/sections/brief/brief-question';
import Wrapper from '@/components/wrapper';

export const metadata: Metadata = {
  title: 'Ответьте на 3 вопроса и получите сайт',
  description:
    'Три вопроса которые помогут точно дать понять какой сайт вам нужен и какие результаты вы получите.',
};

const BriefPage = () => {
  return (
    <Wrapper className="mt-9">
      <div className="w-full max-w-2xl mx-auto lg:max-w-none">
        <div className="max-w-3xl space-y-8">
          <h1 className="pt-3 max-w-2xl text-5xl sm:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight font-semibold">
            Расскажите о Вашем проекте.
          </h1>
          <p className="  xl:text-lg text-accent dark:text-white font-medium">
            Наш бриф состоит из трех простых вопросов, которые помогут нам лучше
            понять ваши цели и потребности. Заполните его, и мы свяжемся с вами
            для обсуждения деталей вашего проекта.
          </p>
        </div>
        <BriefQuestion className="mt-10" />
      </div>
    </Wrapper>
  );
};

export default BriefPage;
