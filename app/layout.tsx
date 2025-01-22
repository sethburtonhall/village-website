import type { Metadata } from 'next';
import { Noto_Sans, Nunito, Caveat } from 'next/font/google';
import './globals.css';

const noto = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Village',
  description: 'Group Sign-ups Made Simple.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto.variable} ${nunito.variable} ${caveat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
