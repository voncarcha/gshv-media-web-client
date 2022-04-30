import { Box } from '@chakra-ui/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Page = ({ children }: Props) => {
  return <Box as="main" pt="74px">{children}</Box>;
};

export default Page;
