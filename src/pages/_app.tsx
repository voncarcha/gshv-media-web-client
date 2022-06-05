import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme';
import CookieConsentBanner from 'components/CookieConsentBanner';
import { useWindowScroll } from 'react-use';
import dynamic from 'next/dynamic';

const ScrollOnTop = dynamic(() => import('components/ScrollOnTop'));

function MyApp({ Component, pageProps }: AppProps) {
  const { y } = useWindowScroll();

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <CookieConsentBanner />
      {y > 400 && <ScrollOnTop />}
    </ChakraProvider>
  );
}

export default MyApp;
