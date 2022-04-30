import { Text, Image, Box, Stack, Button } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box as="footer" w="full" px="20px" py="40px" bgColor="#2b2c2e">
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        justifyContent="space-between"
        maxW="1200px"
        m="0 auto"
        spacing={10}
        color="white"
        w="full"
      >
        <Box textAlign={{ base: 'center', lg: 'left' }}>
          <Image
            order={{ base: 0, lg: 1 }}
            src="/images/hero-logo.png"
            alt="logo"
            w="100px"
            display="block"
            m={{ base: 'auto', lg: '0' }}
          />
          <Text fontSize="14px">2021 GSHV Media LTD, All rights reserved.</Text>
        </Box>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={10}
        >
          <Box>
            <Text textAlign="center">
              GHSV MEDIA LTD
              <br /> HE426173
              <br /> info@gshvmedia.com
            </Text>
          </Box>
          <Box>
            <Text textAlign="center">
              Arch. Makariou III, 256
              <br /> Eftapaton Court, 3105
              <br /> Limassol, Cyprus
            </Text>
          </Box>
          <Stack direction="column" maxW="200px">
            <Button size="sm" colorScheme="whiteAlpha">
              Terms & Conditions
            </Button>
            <Button size="sm" colorScheme="whiteAlpha">
              Privacy & Cookie Policy
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
