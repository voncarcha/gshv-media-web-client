import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      debug={true}
      buttonText="Accept"
      cookieName="gsvh-cookie-consent"
      expires={30}
    >
      <Text>
        We use cookies on our website to give you the most relevant experience
        by remembering your preferences and repeat visits. By clicking “Accept”,
        you consent to the use of ALL the cookies.
        <NextLink href="/privacy-policy">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            ml={2}
            textDecor="underline"
            _hover={{ textDecor: 'underline' }}
          >
            Cookie Policy
          </Link>
        </NextLink>
        .
      </Text>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
