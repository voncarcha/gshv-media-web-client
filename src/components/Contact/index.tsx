import React, { useEffect, useState } from 'react';
import {
  Text,
  Input,
  Box,
  Heading,
  HStack,
  VStack,
  Textarea,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  lastName: Yup.string().required('Last name is required'),
});

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSuccess, setSuccess] = useState(false);
  const [isPending, setPending] = useState(false);
  const MAILCHIMP_API_KEY = '38EtwcQoNLBbxflF_RA6uw';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (values: any) => {
    setPending(true);
    const payload = {
      key: MAILCHIMP_API_KEY,
      message: {
        from_email: 'info@gshvmedia.com',
        subject: `GHSV MEDIA contact form - ${values.lastName}`,
        text: `email: ${values.email}\n firstname: ${values.firstName}\n lastname: ${values.lastName}\n phoneNumber: ${values.phoneNumber}\n message: ${values.message}`,
        to: [{ email: ' info@gshvmedia.com', type: 'to' }],
      },
    };
    fetch('https://mandrillapp.com/api/1.0/messages/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data[0].status === 'sent') {
          setSuccess(true);
        }
      })
      .finally(() => {
        setPending(false);
        onOpen();
      });
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess, reset]);

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack as="article" spacing="20px">
            <HStack spacing={7} w="full" alignItems="flex-start">
              <Box flex={1}>
                <Text as="label" pb={2} display="block">
                  First name
                </Text>
                <Input
                  borderColor="#999"
                  size="lg"
                  _focus={{ borderColor: 'primary' }}
                  {...register('firstName')}
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
                  {...register('lastName')}
                />
                {errors.lastName && (
                  <Text color="red.400" fontSize="12px" mt={1}>
                    {errors.lastName?.message}
                  </Text>
                )}
              </Box>
            </HStack>
            <HStack spacing={7} w="full" alignItems="flex-start">
              <Box flex={1}>
                <Text as="label" pb={2} display="block">
                  Email *
                </Text>
                <Input
                  borderColor="#999"
                  size="lg"
                  _focus={{ borderColor: 'primary' }}
                  type="email"
                  {...register('email')}
                />
                {errors.email && (
                  <Text color="red.400" fontSize="12px" mt={1}>
                    {errors.email?.message}
                  </Text>
                )}
              </Box>
              <Box flex={1}>
                <Text as="label" pb={2} display="block">
                  Phone number
                </Text>
                <Input
                  borderColor="#999"
                  size="lg"
                  _focus={{ borderColor: 'primary' }}
                  {...register('phoneNumber')}
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
                {...register('message')}
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
              type="submit"
              isLoading={isPending}
            >
              SEND
            </Button>
          </VStack>
        </form>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {isSuccess ? (
              <VStack py={8} px={5}>
                <CheckCircleIcon fontSize={42} color="#4DBD90" />
                <Text fontSize={18} pt={4}>
                  Thank you, we have received your inquiry and will get back to
                  you as soon as possible.
                </Text>
              </VStack>
            ) : (
              <VStack py={8} px={5}>
                <WarningIcon fontSize={42} color="yellow" />
                <Text fontSize={18} pt={4}>
                  There was a problem processing your inquiry! Please email us
                  directly using the email address listed at the bottom of this
                  page.
                </Text>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Contact;
