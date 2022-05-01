import { Image, Box, Stack, VStack, Text, Heading } from '@chakra-ui/react';
import React from 'react';

const MarketingServices = () => {
  return (
    <Box w="full" px="20px" py="60px" as="section" id="marketing-services">
      <Box maxW="1200px" m="0 auto">
        <Heading
          as="h2"
          textAlign="center"
          textTransform="uppercase"
          fontSize="30px"
          pb="40px"
        >
          Marketing Services
        </Heading>
        <Stack as="ul" direction={{ base: 'column', lg: 'row' }} spacing={20}>
          <VStack as="li" spacing={5}>
            <Image
              src="/images/marketing-image-1.png"
              alt="thumbnail"
              h={{ base: '200px', lg: '280px' }}
            />
            <Heading as="h3" fontSize="22px" textAlign="center">
              DIGITAL PERFORMANCE <br /> MARKETING
            </Heading>
            <Text textAlign="center">
              We engage your target audience, secure leads, and develop your
              brand awareness keeping KPI&apos;s and ROI at the forefront of
              marketing strategy.
            </Text>
          </VStack>
          <VStack as="li" spacing={5}>
            <Image
              src="/images/marketing-image-2.png"
              alt="thumbnail"
              h={{ base: '200px', lg: '280px' }}
            />
            <Heading as="h3" fontSize="22px" textAlign="center">
              WEBSITE <br /> DEVELOPMENT
            </Heading>
            <Text textAlign="center">
              Elevate the potential of your email marketing with a content
              strategy that builds consumer confidence, expands your network,
              and generates leads.
            </Text>
          </VStack>
          <VStack as="li" spacing={5}>
            <Image
              src="/images/marketing-image-3.png"
              alt="thumbnail"
              h={{ base: '200px', lg: '280px' }}
            />
            <Heading as="h3" fontSize="22px" textAlign="center">
              LEAD <br /> GENERATION
            </Heading>
            <Text textAlign="center">
              Elevate the potential of your data optimization and email
              marketing with a strategy that builds consumer confidence, expands
              your network, and generates leads.
            </Text>
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default MarketingServices;
