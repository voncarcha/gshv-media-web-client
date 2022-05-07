import React, { useEffect, useState } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  HStack,
  Image,
  Flex,
  Box,
  IconButton,
  VStack,
  Link,
  useMediaQuery,
} from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import NextLink from 'next/link';

const TopNav = () => {
  const [mounted, setMounted] = useState(false);
  const [isMd] = useMediaQuery('(min-width: 48em)');
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        <NextLink href="/">
          <Link>
            <Image src="/images/logo.png" alt="logo" w="150px" h="70px" />
          </Link>
        </NextLink>
        {mounted && (
          <Box>
            {isMd ? (
              <HStack spacing={10}>
                <NextLink href="/#marketing-services">
                  <Link
                    as={ScrollLink}
                    to="marketing-services"
                    smooth={true}
                    duration={300}
                    offset={-70}
                    fontWeight={700}
                    color="secondary"
                    _hover={{ color: 'primary' }}
                  >
                    Marketing Services
                  </Link>
                </NextLink>
                <NextLink href="/#tech-services">
                  <Link
                    as={ScrollLink}
                    to="tech-services"
                    smooth={true}
                    duration={300}
                    offset={-70}
                    fontWeight={700}
                    color="secondary"
                    _hover={{ color: 'primary' }}
                  >
                    Tech Services
                  </Link>
                </NextLink>
                <NextLink href="/#contact-us">
                  <Link
                    as={ScrollLink}
                    to="contact-us"
                    smooth={true}
                    duration={300}
                    offset={-70}
                    fontWeight={700}
                    color="secondary"
                    _hover={{ color: 'primary' }}
                  >
                    Contact Us
                  </Link>
                </NextLink>
              </HStack>
            ) : (
              <IconButton
                aria-label="Nav button"
                icon={<HamburgerIcon fontSize="22px" />}
                onClick={() => setOpen(!isOpen)}
              />
            )}
          </Box>
        )}
      </Flex>
      {isOpen && (
        <VStack
          border="1px solid"
          borderColor="gray.200"
          bgColor="white"
          spacing={1}
          alignItems="flex-end"
          position="absolute"
          top={85}
          right="10px"
          padding="20px"
          borderRadius="5px"
        >
          <NextLink href="/#marketing-services">
            <Link
              as={ScrollLink}
              to="marketing-services"
              smooth={true}
              duration={300}
              offset={-70}
              fontWeight={700}
              color="secondary"
              _hover={{ color: 'primary' }}
              fontSize="18px"
              onClick={() => setOpen(false)}
            >
              Marketing Services
            </Link>
          </NextLink>
          <NextLink href="/#tech-services">
            <Link
              as={ScrollLink}
              to="tech-services"
              smooth={true}
              duration={300}
              offset={-70}
              fontWeight={700}
              color="secondary"
              _hover={{ color: 'primary' }}
              fontSize="18px"
              onClick={() => setOpen(false)}
            >
              Tech Services
            </Link>
          </NextLink>
          <NextLink href="/#contact-us">
            <Link
              as={ScrollLink}
              to="contact-us"
              smooth={true}
              duration={300}
              offset={-70}
              fontWeight={700}
              color="secondary"
              _hover={{ color: 'primary' }}
              fontSize="18px"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </NextLink>
        </VStack>
      )}
    </Box>
  );
};

export default TopNav;
