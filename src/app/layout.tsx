import './globals.css';
import { Providers } from '@/lib/providers';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '@/components/common/header/Header';
import Container from '@/components/common/Container';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from '@/components/common/footer/Footer';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { PHProvider } from '@/lib/posthog/providers';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const montserrat = Montserrat({ subsets: ['latin'] });
const ttnorms = localFont({
  variable: '--font-tt-norms',
  src: [
    {
      path: '../../public/fonts/tt-norms/TTNorms-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/tt-norms/TTNorms-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/tt-norms/TTNorms-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Nere',
    default: 'Nere',
  },
  description:
    "Ghana's #1 Group Buying Platform. Save up to 40% of your monthly food expenses with your friends and family! Experience the power of group buying, where the unbeatable power of community unlocks unbeatable deals.",
  keywords:
    'Nere, E-commerce, Shopping, Group Buying, Group Shopping, Nere Group Buying Platform, Deals, Discounts, Offers, Nere Offers, Nere Deals, Nere Discounts, Nere Baby Tuesday, Group Buying Sites',
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <PHProvider>
        <body>
          <Providers>
            <main
              className={`${montserrat.className} ${ttnorms.variable} flex min-h-screen flex-col justify-between`}
              style={{ backgroundColor: '#FAFAFA' }}
            >
              {props.children}
              <Footer />
            </main>
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
            <GoogleAnalytics gaId='G-2NJ28203XK' />
          </Providers>
        </body>
      </PHProvider>
    </html>
  );
}
