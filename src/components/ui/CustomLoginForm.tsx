import type { FC } from 'react'

import { signIn, SessionProvider } from 'next-auth/client'
import { useForm } from 'react-hook-form'
import {
  useColorModeValue,
  chakra,
  Divider,
  Flex,
  Box,
  Link,
  Button,
  Icon,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  VisuallyHidden,
} from '@chakra-ui/react'

interface Props {
  providers: SessionProvider[]
}

interface Inputs {
  email: string
  password: string
}

const EmailIcon = (props) => (
  <Icon viewBox="0 0 1792 1792" w="15px" h="15px" {...props}>
    <path
      fill="currentColor"
      d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"
    />
  </Icon>
)

const PasswordIcon = (props) => (
  <Icon viewBox="0 0 1792 1792" w="15px" h="15px" {...props}>
    <path
      fill="currentColor"
      d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"
    />
  </Icon>
)

const LoginForm: FC<Props> = ({ providers }) => {
  const bg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'white')
  const linkColor = useColorModeValue('gray.500', 'gray.100')
  const linkHoverColor = useColorModeValue('gray.700', 'white')

  const { handleSubmit, errors, register, formState } = useForm<Inputs>()

  function validateEmail(value) {
    if (!value) {
      return 'Email is required'
    } else return true
  }

  function validatePassword(value) {
    if (!value) {
      return 'Password is required'
    } else return true
  }

  function onSubmit() {
    return signIn(null, { callbackUrl: process.env.NEXT_PUBLIC_SITE_URL })
  }

  return (
    <Flex
      direction="column"
      w="full"
      bg={bg}
      maxW="md"
      px={{ base: '4', sm: '6', md: '8', lg: '10' }}
      py="8"
      shadow="base"
      rounded="lg"
    >
      <Box alignSelf="center" mb="6" color={textColor} fontSize={{ base: 'xl', sm: '2xl' }} fontWeight="light">
        Login To Your Account
      </Box>
      <Flex w="full" direction="column">
        {Object.values(providers).map((provider) => {
          return (
            <Box key={provider.name}>
              <Button
                w="full"
                py="2"
                px="4"
                my="2"
                bg="black"
                color="white"
                textAlign="center"
                fontSize="md"
                fontWeight="semibold"
                shadow="md"
                rounded="lg"
                transitionProperty="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
                transitionTimingFunction="ease-in"
                transitionDuration="200ms"
                isLoading={formState.isSubmitting}
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
                onClick={() =>
                  signIn(provider.id, {
                    callbackUrl: process.env.NEXT_PUBLIC_SITE_URL,
                  })
                }
              >
                Sign in with {provider.name}
              </Button>
            </Box>
          )
        })}
      </Flex>
      <Divider mt="8" />
      <Box mt="8">
        <form action="#" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" mb="2">
            <FormControl isInvalid={!!errors.email}>
              <VisuallyHidden>
                <FormLabel htmlFor="email">Email Address</FormLabel>
              </VisuallyHidden>
              <Flex position="relative">
                <chakra.span
                  roundedLeft="md"
                  display="inline-flex"
                  alignItems="center"
                  px="3"
                  borderTopWidth="1px"
                  borderBottomWidth="1px"
                  borderLeftWidth="1px"
                  borderColor="gray.300"
                  bg="white"
                  color="gray.500"
                  shadow="sm"
                  fontSize="sm"
                >
                  <EmailIcon />
                </chakra.span>
                <Input
                  type="text"
                  id="sign-in-email"
                  name="email"
                  ref={register({ validate: validateEmail })}
                  roundedRight="lg"
                  roundedLeft="none"
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
                  placeholder="Your email"
                  _placeholder={{ color: 'gray.400' }}
                />
              </Flex>
              {errors.email && formState.touched.email && (
                <Box display="flex" justifyContent="center">
                  <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </Box>
              )}
            </FormControl>
          </Flex>
          <Flex direction="column" mb="6">
            <FormControl isInvalid={!!errors.password}>
              <VisuallyHidden>
                <FormLabel htmlFor="password">Password</FormLabel>
              </VisuallyHidden>
              <Flex position="relative">
                <chakra.span
                  roundedLeft="md"
                  display="inline-flex"
                  alignItems="center"
                  px="3"
                  borderTopWidth="1px"
                  borderBottomWidth="1px"
                  borderLeftWidth="1px"
                  borderColor="gray.300"
                  bg="white"
                  color="gray.500"
                  shadow="sm"
                  fontSize="sm"
                >
                  <PasswordIcon />
                </chakra.span>
                <Input
                  type="password"
                  id="sign-in-password"
                  name="password"
                  ref={register({ validate: validatePassword })}
                  roundedRight="lg"
                  roundedLeft="none"
                  flex="1 1 0%"
                  appearance="none"
                  borderWidth="1px"
                  borderColor="gray.300"
                  w="full"
                  py="2"
                  px="4"
                  fontSize="md"
                  shadow="sm"
                  color="gray.700"
                  bg="white"
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
                  placeholder="Your password"
                  _placeholder={{ color: 'gray.400' }}
                />
              </Flex>
              {errors.password && formState.touched.password && (
                <Box display="flex" justifyContent="center">
                  <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                </Box>
              )}
            </FormControl>
          </Flex>
          <Flex alignItems="center" mb="6" mt="-4">
            <Flex ml="auto">
              <Link
                href="#"
                isExternal
                display="inline-flex"
                fontSize={{ base: 'xs', sm: 'sm' }}
                fontWeight="thin"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
              >
                Forgot Your Password?
              </Link>
            </Flex>
          </Flex>
          <Flex w="full">
            <Button
              type="submit"
              w="full"
              py="2"
              px="4"
              bg="purple.600"
              color="white"
              textAlign="center"
              fontSize="md"
              fontWeight="semibold"
              shadow="md"
              rounded="lg"
              transitionProperty="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
              transitionTimingFunction="ease-in"
              transitionDuration="200ms"
              isLoading={formState.isSubmitting}
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
              Login
            </Button>
          </Flex>
        </form>
      </Box>
      <Flex align="center" justify="center" mt="6">
        <Link
          href="#"
          isExternal
          target="_blank"
          display="inline-flex"
          alignItems="center"
          textAlign="center"
          fontSize="xs"
          fontWeight="thin"
          color={linkColor}
          _hover={{ color: linkHoverColor }}
        >
          <chakra.span ml="2">Don&#x27;t have an account?</chakra.span>
        </Link>
      </Flex>
    </Flex>
  )
}

export default LoginForm
