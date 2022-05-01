import React from 'react';
import {
  Text,
  Input,
  Box,
  Heading,
  HStack,
  VStack,
  Textarea,
  Button,
} from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box
      w="full"
      px="20px"
      py="60px"
      as="section"
      bgColor="#e1ede8"
      id="contact-us"
    >
      <Box maxW="800px" m="0 auto">
        <Heading
          as="h2"
          textAlign="center"
          textTransform="uppercase"
          fontSize="30px"
          pb="40px"
        >
          Contact us
        </Heading>
        <VStack as="article" spacing="20px">
          <HStack spacing={7} w="full">
            <Box flex={1}>
              <Text as="label" pb={2} display="block">
                First name
              </Text>
              <Input
                borderColor="#999"
                size="lg"
                _focus={{ borderColor: 'primary' }}
              />
            </Box>
            <Box flex={1}>
              <Text as="label" pb={2} display="block">
                Last name *
              </Text>
              <Input
                borderColor="#999"
                size="lg"
                _focus={{ borderColor: 'primary' }}
              />
            </Box>
          </HStack>
          <HStack spacing={7} w="full">
            <Box flex={1}>
              <Text as="label" pb={2} display="block">
                Email *
              </Text>
              <Input
                borderColor="#999"
                size="lg"
                _focus={{ borderColor: 'primary' }}
                type="email"
              />
            </Box>
            <Box flex={1}>
              <Text as="label" pb={2} display="block">
                Phone number
              </Text>
              <Input
                borderColor="#999"
                size="lg"
                _focus={{ borderColor: 'primary' }}
                type="number"
              />
            </Box>
          </HStack>
          <Box flex={1} mt="20px" w="full">
            <Text as="label" pb={2} display="block">
              Message
            </Text>
            <Textarea
              borderColor="#999"
              size="lg"
              _focus={{ borderColor: 'primary' }}
            />
          </Box>
          <Button
            bgColor="primary"
            size="lg"
            color="white"
            borderRadius="30px"
            w="150px"
            fontSize="22px"
            letterSpacing="2px"
            _hover={{ bgColor: 'secondary' }}
          >
            SEND
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Contact;
