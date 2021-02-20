import type { FC } from 'react'

import { useForm } from 'react-hook-form'
import {
  useColorModeValue,
  Heading,
  Button,
  Box,
  FormControl,
  FormErrorMessage,
  Image,
  Input,
  Text,
  HStack,
} from '@chakra-ui/react'

type Inputs = {
  email: string
}

const CtaWithSubAndImage: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const headingColor = useColorModeValue('black', 'white')

  const { handleSubmit, errors, register, formState } = useForm<Inputs>()

  function validateEmail(value) {
    if (!value) {
      return 'Email is required'
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
    <Box bg={bg}>
      <Box
        position="relative"
        p={{ lg: '12', xl: '16' }}
        px={{ base: '4', sm: '6' }}
        py={{ base: '6', sm: '8' }}
        overflow="hidden"
      >
        <Heading as="h2" color={headingColor} fontSize={{ base: '2xl', sm: '3xl' }} fontWeight="semibold">
          We&#x27;ve got more coming...
        </Heading>
        <Text mt="2" maxW="xl" fontSize="md" color="gray.400">
          Want to hear from us when we add new components? Sign up for our newsletter and we&#x27;ll email you every
          time we release a new batch of components.
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display={{ sm: 'flex' }} justifyContent="start" mt="6">
            <HStack display="flex" w="full" maxW="sm" spacing="3">
              <Box display="flex" position="relative">
                <FormControl id="email">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    ref={register({ validate: validateEmail })}
                    rounded="lg"
                    appearance="none"
                    borderColor="gray.300"
                    borderWidth="1px"
                    w="full"
                    flex="1 1 0%"
                    py="2"
                    px="4"
                    bg="white"
                    color="gray.400"
                    shadow="sm"
                    fontSize="md"
                    transitionProperty="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
                    transitionTimingFunction="ease-in"
                    transitionDuration="200ms"
                    sx={{
                      '--tw-ring-opacity': '1',
                      '--tw-ring-color': 'rgba(124, 58, 237, var(--tw-ring-opacity))',
                      '--tw-ring-offset-width': '2px',
                      '--tw-ring-offset-color': '#c7d2fe',
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
                    _placeholder={{ color: 'gray.400' }}
                  />
                  <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </FormControl>
              </Box>
              <Button
                type="submit"
                isLoading={formState.isSubmitting}
                flexShrink={0}
                px="4"
                py="2"
                fontSize="md"
                fontWeight="semibold"
                color="white"
                bg="purple.600"
                rounded="lg"
                shadow="md"
                transitionProperty="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
                transitionTimingFunction="ease-in"
                transitionDuration="200ms"
                _hover={{ bg: 'purple.700' }}
                _active={{ bg: 'purple.700' }}
                sx={{
                  '--tw-ring-opacity': '1',
                  '--tw-ring-color': 'rgba(139, 92, 246, var(--tw-ring-opacity))',
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
                  boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
                }}
              >
                Subscribe
              </Button>
            </HStack>
          </Box>
        </form>
        <Box
          position="absolute"
          display={{ base: 'none', lg: 'block' }}
          left={{ lg: '66.666667%', xl: '50%' }}
          right="0"
          insetY="0"
        >
          <picture>
            <source srcSet="/static/images/tailwind/object/5.webp" type="image/webp" />
            <source srcSet="/static/images/tailwind/object/5.png" />
            <Image
              w="50%"
              objectFit="cover"
              maxW="44"
              mx="auto"
              src="/static/images/tailwind/object/5.png"
              alt="shopping item"
            />
          </picture>
        </Box>
      </Box>
    </Box>
  )
}

export default CtaWithSubAndImage
