import React from 'react';
import {
  Text,
  Box,
  Flex,
  Heading,
  VStack,
  Button,
  Stack,
} from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'components/Image';
import logo from '../../../public/images/hero-logo.png';

const HeaderPrimary = () => {
  return (
    <Box
      as="section"
      w="full"
      bgColor="primary"
      bgImage="/images/analytics-graphic.png"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      px="20px"
      py="30px"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW="1000px"
        m="0 auto"
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <VStack
          spacing={8}
          alignItems={{ base: 'center', lg: 'flex-start' }}
          maxW={480}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          <Heading
            as="h1"
            fontSize={{ base: '28px', lg: '38px' }}
            color="white"
            maxW={{ base: '340px', lg: '100%' }}
          >
            Tailored Technology and Made-To-Measure Marketing Solutions
          </Heading>
          <Text color="white" fontSize={{ base: '18px', lg: '20px' }}>
            GSHV Media is a one-stop shop for all your digital needs. We marry
            the very best technology and performance marketing strategies to
            outperform the competition and deliver with impact.
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }}>
            <Button
              as={ScrollLink}
              to="marketing-services"
              smooth={true}
              duration={500}
              offset={-70}
              colorScheme="blackAlpha"
              size="lg"
              cursor="pointer"
            >
              Marketing Services
            </Button>
            <Button
              as={ScrollLink}
              to="tech-services"
              smooth={true}
              duration={500}
              offset={-70}
              variant="outline"
              color="white"
              size="lg"
              cursor="pointer"
              _hover={{ color: 'black', bgColor: 'white' }}
            >
              Tech Services
            </Button>
          </Stack>
        </VStack>
        <Box maxW="460px" mt={{ base: 8, md: 0 }}>
          <Image src={logo} alt="logo" />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeaderPrimary;
