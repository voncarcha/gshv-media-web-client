import { Image, Box, Stack, VStack, Text, Heading } from '@chakra-ui/react';
import React from 'react';

const Support = () => {
  return (
    <Box w="full" px="20px" py="60px" as="section">
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        justifyContent="center"
        maxW="1000px"
        m="0 auto"
        spacing={10}
      >
        <Box>
          <Image
            src="/images/support.png"
            alt="thumbnail"
            h={{ base: '200px', lg: '280px' }}
            display="block"
            m="0 auto"
          />
        </Box>

        <VStack as="li" spacing={5}>
          <Heading as="h3" fontSize="22px">
            24 HOUR SUPPORT
          </Heading>
          <Text
            textAlign={{ base: 'center', lg: 'left' }}
            maxW={{ base: '100%', lg: '440px' }}
          >
            We understand that just because you are asleep, it doesn&apos;t mean
            your business is too. Digital marketing and custom tracking software
            needs to be up and running smoothly 24/7 - 365 days a year. We make
            sure your servers and 3rd-party software integrations are regularly
            monitored to mitigate untimely delay and costly errors.
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Support;
