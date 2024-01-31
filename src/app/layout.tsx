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
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <Providers>
          <Header />
          {props.children}
          <ToastContainer
            position='top-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
