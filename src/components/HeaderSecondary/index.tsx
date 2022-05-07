import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

interface Props {
  title: string;
}

const HeaderSecondary = ({ title }: Props) => {
  return (
    <Box as="section" w="full" bgColor="primary" px="20px" py="60px">
      <Heading
        as="h1"
        color="white"
        textTransform="uppercase"
        textAlign="center"
        fontSize="38px"
      >
        {title}
      </Heading>
    </Box>
  );
};

export default HeaderSecondary;
