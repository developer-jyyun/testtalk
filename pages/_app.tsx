import '../styles/normalize.scss';
import '../assets/fonts/fonts.scss';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Navigation from '@/components/Navigation/Navigation';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Navigation />
    </RecoilRoot>
  );
}
