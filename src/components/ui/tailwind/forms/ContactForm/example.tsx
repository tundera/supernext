import type { FC } from 'react'

import { useForm } from 'react-hook-form'
import {
  useColorModeValue,
  Box,
  Grid,
  Button,
  HStack,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  FormErrorMessage,
  VisuallyHidden,
  GridItem,
} from '@chakra-ui/react'

interface Inputs {
  name: string
  email: string
  message: string
}

const ContactForm: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const headingColor = useColorModeValue('gray.800', 'white')

  const { handleSubmit, errors, register, formState } = useForm<Inputs>()

  function validateName(value) {
    if (!value) {
      return 'Password is required'
    } else return true
  }

  function validateEmail(value) {
    if (!value) {
      return 'Email is required'
    } else return true
  }

  function validateMessage(value) {
    if (!value) {
      return 'Message is required'
    } else return true
  }

  function onSubmit(values) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <HStack as="form" display="flex" w="full" maxW="sm" spacing="3" onSubmit={handleSubmit(onSubmit)}>
      <Box w="full" maxW="xl" px="5" py="10" m="auto" mt="10" bg={bg} rounded="lg" shadow="base">
        <Box color={headingColor} mb="6" fontSize="3xl" fontWeight="light" textAlign="center">
          Contact us!
        </Box>
        <Grid maxW="xl" templateColumns="repeat(2, minmax(0, 1fr))" gap="4" m="auto">
          <GridItem colSpan={{ base: 2, lg: 1 }}>
            <Box position="relative">
              <FormControl isInvalid={!!errors.name}>
                <VisuallyHidden>
                  <FormLabel htmlFor="name">Name</FormLabel>
                </VisuallyHidden>
                <Input
                  type="text"
                  id="contact-form-name"
                  ref={register({ validate: validateName })}
                  rounded="lg"
                  flex="1 1 0%"
                  appearance="none"
                  borderWidth="1px"
                  borderColor="gray.300"
                  w="full"
                  py="2"
                  px="4"
                  bg="white"
                  color="gray.700"
                  shadow="sm"
                  fontSize="md"
                  transitionProperty="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
                  transitionTimingFunction="ease-in"
                  transitionDuration="200ms"
                  placeholder="Name"
                  _placeholder={{ color: 'gray.400' }}
                  sx={{
                    '--tw-ring-opacity': '1',
                    '--tw-ring-color': 'rgba(124, 58, 237, var(--tw-ring-opacity))',
                    '--tw-ring-offset-width': '2px',
                    '--tw-ring-offset-color': '#ddd6fe',
                    '--tw-ring-offset-shadow':
                      'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                    '--tw-ring-shadow':
                      'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                  }}
                  _focus={{
                    outlineColor: 'var(--tw-ring-color)',
                    outline: '2px solid transparent',
                    outlineOffset: '2px',
                    borderColor: 'transparent',
                    boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
                  }}
                />
                <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
              </FormControl>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 2, lg: 1 }}>
            <Box position="relative">
              <FormControl isInvalid={!!errors.email}>
                <VisuallyHidden>
                  <FormLabel htmlFor="email">Email</FormLabel>
                </VisuallyHidden>
                <Input
                  type="text"
                  id="contact-form-email"
                  ref={register({ validate: validateEmail })}
                  rounded="lg"
                  flex="1 1 0%"
                  appearance="none"
                  borderWidth="1px"
                  w="full"
                  py="2"
                  px="4"
                  bg="white"
                  color="gray.700"
                  borderColor="gray.300"
                  shadow="sm"
                  placeholder="Email"
                  _placeholder={{ color: 'gray.400' }}
                  transitionProperty="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
                  transitionTimingFunction="ease-in"
                  transitionDuration="200ms"
                  sx={{
                    '--tw-ring-opacity': '1',
                    '--tw-ring-color': 'rgba(124, 58, 237, var(--tw-ring-opacity))',
                    '--tw-ring-offset-width': '2px',
                    '--tw-ring-offset-color': '#ddd6fe',
                    '--tw-ring-offset-shadow':
                      'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                    '--tw-ring-shadow':
                      'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                  }}
                  _focus={{
                    outlineColor: 'var(--tw-ring-color)',
                    outline: '2px solid transparent',
                    outlineOffset: '2px',
                    borderColor: 'transparent',
                    boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
                  }}
                />
                <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
              </FormControl>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isInvalid={!!errors.message}>
              <VisuallyHidden>
                <FormLabel htmlFor="message" color="gray.700">
                  Message
                </FormLabel>
              </VisuallyHidden>
              <Textarea
                name="message"
                id="message"
                ref={register({ validate: validateMessage })}
                rows={5}
                cols={40}
                flex="1 1 0%"
                appearance="none"
                borderWidth="1px"
                borderColor="gray.300"
                w="full"
                py="2"
                px="4"
                bg="white"
                color="gray.700"
                rounded="lg"
                fontSize="md"
                placeholder="Enter your message"
                _placeholder={{ color: 'gray.400' }}
                transitionProperty="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
                transitionTimingFunction="ease-in"
                transitionDuration="200ms"
                sx={{
                  '--tw-ring-opacity': '1',
                  '--tw-ring-color': 'rgba(124, 58, 237, var(--tw-ring-opacity))',
                  '--tw-ring-offset-width': '2px',
                  '--tw-ring-offset-color': '#ddd6fe',
                  '--tw-ring-offset-shadow':
                    'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                  '--tw-ring-shadow':
                    'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                }}
                _focus={{
                  outlineColor: 'var(--tw-ring-color)',
                  outline: '2px solid transparent',
                  outlineOffset: '2px',
                  borderColor: 'transparent',
                  boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
                }}
              />
              <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2} textAlign="right">
            <Button
              type="submit"
              py="2"
              px="4"
              isLoading={formState.isSubmitting}
              bg="purple.600"
              rounded="lg"
              color="white"
              w="full"
              textAlign="center"
              fontSize="md"
              fontWeight="semibold"
              shadow="md"
              _hover={{ bg: 'purple.700' }}
              _active={{ bg: 'purple.700' }}
              transitionProperty="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
              transitionTimingFunction="ease-in"
              transitionDuration="200ms"
              sx={{
                '--tw-ring-opacity': '1',
                '--tw-ring-color': 'rgba(124, 58, 237, var(--tw-ring-opacity))',
                '--tw-ring-offset-width': '2px',
                '--tw-ring-offset-color': '#ddd6fe',
                '--tw-ring-offset-shadow':
                  'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                '--tw-ring-shadow':
                  'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
              }}
              _focus={{
                outlineColor: 'var(--tw-ring-color)',
                outline: '2px solid transparent',
                outlineOffset: '2px',
                borderColor: 'transparent',
                boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
              }}
            >
              Send
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </HStack>
  )
}

export default ContactForm
