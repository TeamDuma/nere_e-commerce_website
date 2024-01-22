import './globals.css';
import { Providers } from '@/lib/providers';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Header from '@/components/common/header/Header';
import Container from '@/components/common/Container';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from '@/components/common/footer/Footer';

const Mnontserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nere',
  description: 'Nere E-commerce Website',
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <body
        className={`${Mnontserrat.className}`}
        style={{ backgroundColor: '#FAFAFA' }}
      >
        <Providers>
          <Header />
          {props.children}
          <ToastContainer />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
