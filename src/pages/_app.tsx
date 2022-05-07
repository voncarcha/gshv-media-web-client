import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme';
import ScrollOnTop from 'components/ScrollOnTop';
import CookieConsentBanner from 'components/CookieConsentBanner';
import { getCookieConsentValue } from 'react-cookie-consent';

function MyApp({ Component, pageProps }: AppProps) {
  console.log(getCookieConsentValue());

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <ScrollOnTop />
      <CookieConsentBanner />
    </ChakraProvider>
  );
}

export default MyApp;
