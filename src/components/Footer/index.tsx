import { Text, Box, Stack, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import Image from 'components/Image';
import logo from '../../../public/images/hero-logo.png';

const Footer = () => {
  const router = useRouter();

  return (
    <Box as="footer" w="full" px="20px" py="40px" bgColor="#2b2c2e">
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        justifyContent="space-between"
        maxW="1000px"
        m="0 auto"
        spacing={10}
        color="white"
        w="full"
      >
        <Box textAlign={{ base: 'center', lg: 'left' }}>
          <Box w={100}>
            <Image src={logo} alt="logo" />
          </Box>
          <Text fontSize="14px">2021 GSHV Media LTD, All rights reserved.</Text>
        </Box>
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
          <Button
            onClick={() => router.push('/terms-conditions')}
            size="sm"
            colorScheme="whiteAlpha"
          >
            Terms & Conditions
          </Button>
          <Button
            onClick={() => router.push('/privacy-policy')}
            size="sm"
            colorScheme="whiteAlpha"
          >
            Privacy & Cookie Policy
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
