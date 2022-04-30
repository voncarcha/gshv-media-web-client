import React from 'react';
import { Box, Grid, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import {
  FcSmartphoneTablet,
  FcStatistics,
  FcDataProtection,
  FcCollaboration,
} from 'react-icons/fc';

const Features = () => {
  return (
    <Box as="section" w="full" px="20px" py="40px" bgColor="primary">
      <Grid
        as="ul"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={8}
        m="0 auto"
        maxW="1200px"
      >
        <VStack
          as="li"
          alignItems={{ base: 'center', md: 'flex-start' }}
          spacing={4}
        >
          <Icon as={FcSmartphoneTablet} fontSize="52px" />
          <Heading as="h3" color="white" fontSize="22px">
            Custom App Integration
          </Heading>
          <Text color="white" textAlign={{ base: 'center', md: 'left' }}>
            Setup of secure bucket storage with 3rd party providers, OTP
            integration and encrypted email migration for your applications.
          </Text>
        </VStack>
        <VStack
          as="li"
          alignItems={{ base: 'center', md: 'flex-start' }}
          spacing={4}
        >
          <Icon as={FcDataProtection} fontSize="52px" />
          <Heading as="h3" color="white" fontSize="22px">
            Secure Server Storage
          </Heading>
          <Text color="white" textAlign={{ base: 'center', md: 'left' }}>
            Integration and setup of custom server hardware and cloud-based
            storage infrastructure. As well custom IP and password protections
            can be provided.
          </Text>
        </VStack>
        <VStack
          as="li"
          alignItems={{ base: 'center', md: 'flex-start' }}
          spacing={4}
        >
          <Icon as={FcCollaboration} fontSize="52px" />
          <Heading as="h3" color="white" fontSize="22px">
            Bespoke Development
          </Heading>
          <Text color="white" textAlign={{ base: 'center', md: 'left' }}>
            Whatever our in-house dev team can&apos;t handle, we have a host of
            regular freelancers we work with to build any custom applications
            and tech you require.
          </Text>
        </VStack>
        <VStack
          as="li"
          alignItems={{ base: 'center', md: 'flex-start' }}
          spacing={4}
        >
          <Icon as={FcStatistics} fontSize="52px" />
          <Heading as="h3" color="white" fontSize="22px">
            Custom Tracking Metrics
          </Heading>
          <Text color="white" textAlign={{ base: 'center', md: 'left' }}>
            We can facilitate and guide with the optimization of tracking
            software as well as the integrations of existing infrastructure to
            maximize your performance.
          </Text>
        </VStack>
      </Grid>
    </Box>
  );
};

export default Features;
