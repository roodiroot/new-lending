import Wrapper from "@/components/wrapper";

const ThankPage = () => {
  return (
    <Wrapper className='mt-9'>
      <div className='w-full py-[250px] max-w-2xl flex items-center justify-center mx-auto lg:max-w-none '>
        <div className='flex flex-col item-start'>
          <h1 className='max-w-2xl text-5xl sm:text-6xl 2xl:text-7xl tracking-tight font-semibold'>
            Спасибо!
          </h1>
          <p className='tracking-tight font-semibold text-xl lg:text-2xl'>
            ожидайте звонка
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ThankPage;
