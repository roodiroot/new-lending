'use client';

import Button from '@/components/ui/button';
import Link from 'next/link';

const BenfitsButton = () => (
  <Link
    href="/brief"
    className="inline-block animate-shimmer text-lg font-medium px-9 py-3.5 rounded-2xl  transition bg-[linear-gradient(110deg,#ffffff,45%,#CAD7F5,55%,#ffffff)] text-accent"
  >
    Заполнить
  </Link>
);

export default BenfitsButton;
