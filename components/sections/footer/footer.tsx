import Link from 'next/link';

const Footer = () => {
  return (
    <div className="pt-12 pb-4 text-center text-white/80">
      <div className="text-xs">
        2023 - 2024{' '}
        <a href="https://matryoshka-studio.ru/">© Matryoshka studio</a>
        <br />
        <Link href={'/privacy'}>
          Политика по использованию персональных данных
        </Link>
      </div>
    </div>
  );
};

export default Footer;
