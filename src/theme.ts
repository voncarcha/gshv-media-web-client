import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  colors: {
    light: '#fcfcfc',
    dark: '#333333',
    primary: '#4DBD90',
    secondary: '#3e5c50',
  },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        color: '#333333',
      },
      a: {
        _hover: {
          textDecoration: 'none !important',
        },
      },
      '*:focus': {
        outline: 'none',
        boxShadow: 'none !important',
      },
    },
  },
});

export default theme;
