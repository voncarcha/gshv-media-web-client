import React from 'react';
import { Image, Box, Heading, Grid } from '@chakra-ui/react';

const Partnership = () => {
  return (
    <Box as="section" w="full" bgColor="secondary" px="20px" py="20px">
      <Box maxW="1000px" m="0 auto">
        <Heading
          as="h2"
          fontSize="16px"
          fontWeight={400}
          color="whiteAlpha.500"
          textAlign="center"
          mb={2}
        >
          In Partnership With
        </Heading>
        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(6, 1fr)',
          }}
          gap={{ base: 4, md: 8 }}
          w="full"
        >
          <Image
            src="/images/partner-logicboxes.png"
            alt="partner-logo"
            display="block"
            m="auto"
          />
          <Image
            src="/images/partner-linode.png"
            alt="partner-logo"
            display="block"
            m="auto"
          />
          <Image
            src="/images/partner-monetizer.png"
            alt="partner-logo"
            display="block"
            m="auto"
          />
          <Image
            src="/images/partner-adplexity.png"
            alt="partner-logo"
            display="block"
            m="auto"
          />
          <Image
            src="/images/partner-uptimerobot.png"
            alt="partner-logo"
            display="block"
            m="auto"
          />
          <Image
            src="/images/partner-inap.png"
            alt="partner-logo"
            display="block"
            m="auto"
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default Partnership;
