import type { Metadata } from 'next';

import { beautifulFont } from './fonts';
import Header from '@/components/sections/header/header';
import Footer from '@/components/sections/footer/footer';

import './globals.css';
import ThemeProvider from '@/providers/theme-provider';
import OverlaysCombain from '@/components/overlays/overlays-combain';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://moskow.matryoshka-studio.ru/'),
  title: {
    template: '%s | Веб студия "Матрёшка". Создание и продвижение сайтов.',
    default: 'Веб студия "Матрёшка". Создаем для вас бизнес в интернете. ',
  },
  description:
    'Создаем для вас бизнес в интернете. Создание сайтов и веб приложений для бизнеса. Настройка реклама и SEO оптимизация. ',

  icons: './_icons/icon.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={beautifulFont.className}
      suppressHydrationWarning
    >
      <body className="text-accent bg-accent dark:text-white">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <OverlaysCombain />
        </ThemeProvider>
      </body>
    </html>
  );
}
