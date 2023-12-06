import './globals.css';
import { Providers } from '@/lib/providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/common/header/Header';
import Container from '@/components/common/Container';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nere',
  description: 'Nere E-commerce Website',
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className='flex-grow'>
            <Container>{props.children}</Container>
          </main>
        </Providers>
      </body>
    </html>
  );
}
