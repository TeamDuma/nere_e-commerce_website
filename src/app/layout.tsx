import './globals.css';
import { Providers } from '@/lib/providers';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Header from '@/components/common/header/Header';
import Container from '@/components/common/Container';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from '@/components/common/footer/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

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
          {/* <GoogleTagManager gtmId='GTM-T76G6F9Q' /> */}
          <GoogleAnalytics gaId='G-2NJ28203XK' />
        </Providers>
      </body>
    </html>
  );
}
