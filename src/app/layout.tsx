import './globals.css';
import { Providers } from '@/lib/providers';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Header from '@/components/common/header/Header';
import Container from '@/components/common/Container';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from '@/components/common/footer/Footer';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { PHProvider } from '@/lib/posthog/providers';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Nere',
    default: 'Nere'
  },
  description: "Ghana's #1 Group Buying Platform",
  keywords:
    'Nere, E-commerce, Shopping, Group Buying, Group Shopping, Nere Group Buying Platform, Deals, Discounts, Offers, Nere Offers, Nere Deals, Nere Discounts, Nere Baby Tuesday, Group Buying Sites',
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <PHProvider>
        <body
          className={`${montserrat.className}`}
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
      </PHProvider>
    </html>
  );
}
