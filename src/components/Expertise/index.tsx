import React from 'react';
import { Box, Center, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import Image from 'components/Image';
import expertise from '../../../public/images/expertise.png';

const Expertise = () => {
  return (
    <Box as="section" w="full" px="20px" py="40px" mt="30px">
      <VStack m="0 auto" maxW="1000px">
        <Heading
          as="h2"
          textTransform="uppercase"
          fontSize="30px"
          textAlign="center"
        >
          Integrate your systems
        </Heading>
        <Text fontSize="19px" textAlign="center">
          Everything you need to streamline your online business and processes
        </Text>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          w="full"
          justifyContent="center"
        >
          <Center >
            <Image
              src={expertise}
              alt="thumbnail"
            />
          </Center>
          <VStack
            py="30px"
            maxW={{ base: '100%', lg: '460px' }}
            w="full"
            spacing={5}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Heading as="h3" fontSize="22px" textAlign="center">
              OUR EXPERTISE
            </Heading>
            <Text>
              We specialize in helping you secure and optimize the way you work
              online. Whether you are seeking to develop an app, integrate your
              CRM with custom tracking software or simply streamline the hosting
              and management of your websites, GSHV MEDIA tailor&apos;s its
              solution to your business needs.
            </Text>
            <Text>
              We provide premium digital marketing services to gain exposure for
              your business and its products and are experienced with all
              technological integrations required to fulfill this objective.
            </Text>
            <Text>
              We understand the importance of working in a secure yet convenient
              online environment and can both secure existing operations as well
              as create a custom environment for your employees to transfer data
              both internally and externally.
            </Text>
          </VStack>
        </Stack>
      </VStack>
    </Box>
  );
};

export default Expertise;
