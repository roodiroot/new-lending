'use client';

import Button from '@/components/ui/button';
import Link from 'next/link';

const BenfitsButton = () => (
  <>
    <Link
      href="/brief"
      className="inline-block text-accent text-lg  font-medium px-9 py-3.5 rounded-2xl  dark:text-accent transition animate-shimmer bg-[linear-gradient(110deg,#ffffff,45%,#CAD7F5,55%,#ffffff)] dark:bg-[linear-gradient(110deg,#ffffff,45%,#CAD7F5,55%,#ffffff)] bg-[length:200%_100%]"
    >
      Заполнить
    </Link>
  </>
);

export default BenfitsButton;
