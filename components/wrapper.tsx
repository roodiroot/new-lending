import Container from './container';

interface WrapperProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Wrapper: React.FC<WrapperProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <div className="relative overflow-hidden w-full h-full bg-white-project rounded-[35px]  px-4 py-6 sm:px-14 sm:py-16 sm:rounded-[70px] dark:bg-accent-400">
        {children}
      </div>
    </Container>
  );
};

export default Wrapper;
