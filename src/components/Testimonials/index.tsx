import React from 'react';
import {
  Box,
  Heading,
  Icon,
  Image,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const PrevArrow = ({ onClick }: { onClick?: () => {} }) => {
  return (
    <IconButton
      onClick={onClick}
      aria-label="prev"
      icon={<Icon as={IoChevronBackOutline} />}
      position="absolute"
      top="50%"
      left="0"
      transform="translateY(-50%)"
      zIndex={1}
    />
  );
};

const NextArrow = ({ onClick }: { onClick?: () => {} }) => {
  return (
    <IconButton
      onClick={onClick}
      aria-label="next"
      icon={<Icon as={IoChevronForwardOutline} />}
      position="absolute"
      top="50%"
      right="0"
      transform="translateY(-50%)"
      zIndex={1}
    />
  );
};

const Testimonials = () => {
  return (
    <Box w="full" px="20px" py="60px" as="section">
      <Box maxW="900px" m="0 auto">
        <Heading
          as="h2"
          textAlign="center"
          textTransform="uppercase"
          fontSize="30px"
          pb="40px"
        >
          What people say about us
        </Heading>
        <Slider
          arrows={true}
          infinite={true}
          autoplaySpeed={5000}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          <Box px="60px">
            <VStack spacing={5} as="article" maxW="760px" m="0 auto">
              <Box>
                <Image
                  src="/images/testi-logo-1.png"
                  alt="testi-logo"
                  display="block"
                  m="auto"
                  w="70px"
                  borderRadius="100%"
                />
              </Box>
              <Box textAlign="center">
                <Text fontWeight={700} fontSize="18px">
                  Lee Cooper
                </Text>
                <Text fontSize="18px">Co-founder at Afflow Limited</Text>
              </Box>
              <Text textAlign="center">
                “GSHV Media has been exceptional and we couldn&apos;t be
                happier. They have helped me several times during the years with
                our infrastructure. This included custom hardware, connectivity
                improvements and solving addressing issues that popped up.
                We&apos;ve been very pleased with their service and highly
                recommend them.”
              </Text>
            </VStack>
          </Box>
          <Box px="60px">
            <VStack spacing={5} as="article" maxW="760px" m="0 auto">
              <Box>
                <Image
                  src="/images/testi-logo-2.png"
                  alt="testi-logo"
                  display="block"
                  m="auto"
                  w="70px"
                  borderRadius="100%"
                />
              </Box>
              <Box textAlign="center">
                <Text fontWeight={700} fontSize="18px">
                  Ivan Egoshin
                </Text>
                <Text fontSize="18px">AdIntelligence Ltd</Text>
              </Box>
              <Text textAlign="center">
                “We really experienced the difference after migrating to GSHV
                Media – solutions that were provided considered not only the
                hosting itself, but also our systems. This was why after a short
                period of testing, we moved all our production machines to GSHV
                Media LTD and have not regretted this decision ever since.
              </Text>
            </VStack>
          </Box>
          <Box px="60px">
            <VStack spacing={5} as="article" maxW="760px" m="0 auto">
              <Box>
                <Image
                  src="/images/testi-logo-3.png"
                  alt="testi-logo"
                  display="block"
                  m="auto"
                  w="70px"
                  borderRadius="100%"
                />
              </Box>
              <Box textAlign="center">
                <Text fontWeight={700} fontSize="18px">
                  Jamie Dawson
                </Text>
                <Text fontSize="18px">Jello Studios</Text>
              </Box>
              <Text textAlign="center">
                “We can definitely recommend GSHV Media for their personal
                approach and professionalism. They helped us secure and
                streamline our infrastructure from start to finish, always
                suggesting the most appropriate fixes, not just the most
                expensive ones. We are very pleased we started working with
                them.
              </Text>
            </VStack>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
};

export default Testimonials;
