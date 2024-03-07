import BenfitsButton from './benefits-button';

const BenefitsCTA = () => {
  return (
    <div className="relative rounded-[36px] p-4 sm:px-8 sm:py-36 lg:px-14 flex flex-col justify-center">
      <div className="space-y-6">
        <h3 className="text-[40px] leading-10 tracking-tight font-semibold text-white">
          С чего начать?
        </h3>
        <p className="text-lg text-white">
          Заполните наш быстрый бриф и получите персонализированное предложение!
        </p>
        <BenfitsButton />
      </div>
    </div>
  );
};

export default BenefitsCTA;
