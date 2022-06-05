import React from 'react';
import { Box, Heading, Grid, Center } from '@chakra-ui/react';
import Image from 'components/Image';
import parterLogo1 from '../../../public/images/partner-logicboxes.png';
import parterLogo2 from '../../../public/images/partner-linode.png';
import parterLogo3 from '../../../public/images/partner-monetizer.png';
import parterLogo4 from '../../../public/images/partner-adplexity.png';
import parterLogo5 from '../../../public/images/partner-uptimerobot.png';
import parterLogo6 from '../../../public/images/partner-inap.png';
import parterLogo7 from '../../../public/images/partner-realtime-register.png';

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
            lg: 'repeat(7, 1fr)',
          }}
          gap={{ base: 4, md: 8 }}
          w="full"
        >
          <Center>
            <Image
              src={parterLogo1}
              alt="partner-logo"
              display="block"
              m="auto"
            />
          </Center>
          <Center>
            <Image
              src={parterLogo2}
              alt="partner-logo"
              display="block"
              m="auto"
            />
          </Center>
          <Center>
            <Image
              src={parterLogo3}
              alt="partner-logo"
              display="block"
              m="auto"
            />
          </Center>
          <Center>
            <Image
              src={parterLogo4}
              alt="partner-logo"
              display="block"
              m="auto"
            />
          </Center>
          <Center>
            <Image
              src={parterLogo5}
              alt="partner-logo"
              display="block"
              m="auto"
            />
          </Center>
          <Center>
            <Image
              src={parterLogo6}
              alt="partner-logo"
              display="block"
              m="auto"
            />
          </Center>
          <Center>
            <Image
              src={parterLogo7}
              alt="partner-logo"
              display="block"
              m="auto"
            />
          </Center>
        </Grid>
      </Box>
    </Box>
  );
};

export default Partnership;
