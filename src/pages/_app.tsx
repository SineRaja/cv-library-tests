import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import nextI18nConfig from '../../next-i18next.config';
import ErrorBoundary from '../components/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CV Library - Find Jobs</title>
      </Head>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default appWithTranslation(MyApp, nextI18nConfig);
