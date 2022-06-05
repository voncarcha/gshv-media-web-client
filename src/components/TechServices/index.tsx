import { Box, Stack, VStack, Text, Heading, Center } from '@chakra-ui/react';
import React from 'react';
import Image from 'components/Image';
import thumb1 from '../../../public/images/tech-image-1.png';
import thumb2 from '../../../public/images/tech-image-2.png';
import thumb3 from '../../../public/images/tech-image-3.png';

const TechServices = () => {
  return (
    <Box w="full" px="20px" py="60px" as="section" id="tech-services">
      <Box maxW="1000px" m="0 auto">
        <Heading
          as="h2"
          textAlign="center"
          textTransform="uppercase"
          fontSize="30px"
          pb="40px"
        >
          Tech Services
        </Heading>
        <Stack as="ul" direction={{ base: 'column', lg: 'row' }} spacing={20}>
          <VStack as="li" spacing={5}>
            <Center
              h={{ base: '200px', lg: '280px' }}
              sx={{ '> span': { height: '100% !important' } }}
            >
              <Image
                src={thumb1}
                alt="thumbnail"
                h="full"
                w="full"
                objectFit="contain"
              />
            </Center>
            <Heading as="h3" fontSize="22px" textAlign="center">
              DIGITAL INFRASTRUCTURE
            </Heading>
            <Text textAlign="center">
              Setup of server environment and maintenance of secure connections
              between custom servers and private networks - including installing
              intrusion detection.
            </Text>
          </VStack>
          <VStack as="li" spacing={5}>
            <Center
              h={{ base: '200px', lg: '280px' }}
              sx={{ '> span': { height: '100% !important' } }}
            >
              <Image
                src={thumb2}
                alt="thumbnail"
                h="full"
                w="full"
                objectFit="contain"
              />
            </Center>
            <Heading as="h3" fontSize="22px" textAlign="center">
              SECURE INFRASTRUCTURE
            </Heading>
            <Text textAlign="center">
              We are able to carry out security audits on any existing
              infrastructure, and then either patch the issues ourselves or
              suggest a suitable solution for you.
            </Text>
          </VStack>
          <VStack as="li" spacing={5}>
            <Center
              h={{ base: '200px', lg: '280px' }}
              sx={{ '> span': { height: '100% !important' } }}
            >
              <Image
                src={thumb3}
                alt="thumbnail"
                h="full"
                w="full"
                objectFit="contain"
              />
            </Center>
            <Heading as="h3" fontSize="22px" textAlign="center">
              SOFTWARE INTEGRATION
            </Heading>
            <Text textAlign="center">
              Complimenting a company&apos;s existing infrastructure with secure
              2-factor verification, SSL Certification for websites and
              domain/email integration.
            </Text>
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default TechServices;
