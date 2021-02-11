/* eslint-disable jsx-a11y/anchor-is-valid */
import type { FC } from 'react'

import Image from 'next/image'
import useSWR from 'swr'
import { useQuery } from 'react-query'

import { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { Auth } from '@supabase/ui'
import { useColorModeValue, chakra, Divider, Heading, VStack, Flex, Text, Button } from '@chakra-ui/react'
import { createBrandLogoIcon } from 'src/utils/createBrandIcons'

import { supabase } from '@lib/supabase'
import { useRouter } from 'next/router'

type AuthView = 'sign_in' | 'sign_up' | 'forgotten_password' | 'magic_link'

const getUserData = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json())

const Authentication = chakra(Auth)

const BrandLogo = createBrandLogoIcon('#FFFFFF')

const LoginForm: FC = () => {
  const router = useRouter()
  const color = useColorModeValue('brand.500', 'whiteAlpha.900')
  const bg = useColorModeValue('gray.800', 'whiteAlpha.900')
  // const bg = useColorModeValue('gray.800', 'whiteAlpha.900')
  const buttonBg = useColorModeValue('brand.500', 'whiteAlpha.900')
  const buttonColor = useColorModeValue('whiteAlpha.900', 'brand.500')

  const { user, session } = Auth.useUser()
  const { data, error } = useSWR(session ? ['/api/getUser', session.access_token] : null, getUserData)

  // const { data, error } = useQuery(['Session', session ? session?.access_token : null], () =>
  //   getUserData('/api/getUser', session?.access_token),
  // )
  const [authView, setAuthView] = useState<AuthView>('sign_in')

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') setAuthView('forgotten_password')
      if (event === 'USER_UPDATED') setTimeout(() => setAuthView('sign_in'), 1000)
      // Send session to /api/auth route to set the auth cookie.
      // NOTE: this is only needed if you're doing SSR (getServerSideProps)!
      fetch('/api/auth', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify({ event, session }),
      }).then((res) => res.json())
    })

    return () => {
      authListener.unsubscribe()
    }
  }, [router])

  return (
    <Flex
      direction="column"
      maxW="420px"
      align="center"
      bg="gray.800"
      borderRadius={{ base: 0, md: 8 }}
      boxShadow="2xl"
    >
      {user ? (
        <VStack m="4rem" color="whiteAlpha.900" fontWeight="bold" spacing="8">
          {authView === 'forgotten_password' && <Auth.UpdatePassword supabaseClient={supabase} />}
          {user && (
            <>
              <Heading as="h2">Sign In</Heading>
              <BrandLogo w="48" h="48" />
              <Text>You're signed in</Text>
              <Text strong>Currently signed in as {user.id}</Text>

              <Button bg={buttonBg} color={buttonColor} onClick={() => supabase.auth.signOut()}>
                Log out
              </Button>
              {error && <Text color="red.500">Failed to fetch user!</Text>}
              {data && !error ? (
                <Flex direction="column" align="center">
                  <Text overflow="auto" color="green.500">
                    Logged in
                  </Text>
                  <Text></Text>
                </Flex>
              ) : (
                <div>Loading...</div>
              )}

              <Text fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
                <NextLink href="/profile">
                  <a>SSR example with getServerSideProps</a>
                </NextLink>
              </Text>
            </>
          )}
        </VStack>
      ) : (
        <VStack m="4rem">
          <Heading as="h2">Sign In</Heading>
          <Authentication
            borderRadius="xl"
            textAlign="center"
            padding="8"
            bgColor="gray.100"
            color="black"
            supabaseClient={supabase}
            providers={['google', 'github']}
            view={authView}
            socialLayout="horizontal"
            socialButtonSize="xlarge"
          />
        </VStack>
      )}
      <Divider />
      <Flex align="center" w="100%" justify="center" direction="column" color={color}>
        <Text mt="12" mb="-8" color="white">
          Powered By
        </Text>
        <Image src="/static/images/supabase-dark-logo.svg" width="128" height="128" alt="Supabase logo" />
      </Flex>
    </Flex>
  )
}

export default LoginForm

// export type { Props as LoginFormProps }
