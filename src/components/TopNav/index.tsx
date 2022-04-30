import { HStack, Image, Text, Flex, Box } from '@chakra-ui/react';
import React from 'react';

const TopNav = () => {
  return (
    <Box
      as="nav"
      h="74px"
      w="full"
      position="fixed"
      top={0}
      left={0}
      borderBottom="1px solid"
      borderColor="gray.200"
      px="20px"
      bgColor="white"
      zIndex={10}
    >
      <Flex
        maxW="1200px"
        m="0 auto"
        alignItems="center"
        justifyContent="space-between"
      >
        <Image src="/images/logo.png" alt="logo" w="150px" h="70px" />
        <HStack spacing={10}>
          <Text>Marketing Services</Text>
          <Text>Tech Services</Text>
          <Text>Contact Us</Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default TopNav;
