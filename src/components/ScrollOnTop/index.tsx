import { ArrowUpIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React from 'react';

const ScrollOnTop = () => {
  return (
    <Box
      as="button"
      borderRadius="full"
      border="none"
      bgColor="primary"
      position="fixed"
      bottom="20px"
      right="20px"
      width="50px"
      height="50px"
      onClick={() => window.scrollTo(0, 0)}
      boxShadow="0 0 10px rgba(0,0,0,0.2)"
      _hover={{ bgColor: 'secondary' }}
    >
      <ArrowUpIcon color="white" fontSize="28px" />
    </Box>
  );
};

export default ScrollOnTop;
