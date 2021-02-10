/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'

import Image from 'next/image'
import NextLink from 'next/link'
import { Flex, Heading } from '@chakra-ui/react'
import { Auth, Card, Typography, Space, Button, Icon } from '@supabase/ui'
import { supabase } from '@lib/supabase'
import { FaArrowLeft } from 'react-icons/fa'
import { useColorModeValue, Text, VStack, chakra, HStack } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import { useSupabaseAuth } from '@hooks/data/useSupabaseAuth'

const LoginCard = chakra(Card)

const LoginPage: NextPage = () => {
  const { user, session } = Auth.useUser()

  const { view, query } = useSupabaseAuth(session, '/api/getUser')
  const { data, error } = query

  const bg = useColorModeValue('brand.800', 'whiteAlpha.900')
  const color = useColorModeValue('gray.400', 'gray.800')

  const LoginForm = () => {
    const bg = useColorModeValue('brand.800', 'whiteAlpha.900')
    const color = useColorModeValue('gray.400', 'gray.800')

    if (!user)
      return (
        <Space direction="vertical" size={8}>
          <VStack
            spacing={1}
            justifyContent="center"
            p={8}
            textAlign="center"
            w="full"
            shadow="xl"
            color={color}
            bg={bg}
            borderRadius={8}
          >
            <chakra.span fontSize="4xl" fontWeight="bold">
              Sign In
            </chakra.span>

            <Auth
              supabaseClient={supabase}
              // providers={['google', 'github']}
              view={view}
              socialLayout="horizontal"
              socialButtonSize="xlarge"
            />
          </VStack>
        </Space>
      )

    return (
      <Space direction="vertical" size={6}>
        {view === 'forgotten_password' && <Auth.UpdatePassword supabaseClient={supabase} />}
        {user && (
          <>
            <Typography.Text>You&apos;re signed in</Typography.Text>
            <Typography.Text strong>Email: {user.email}</Typography.Text>

            <Button
              icon={<Icon src={FaArrowLeft} type="LogOut" />}
              type="outline"
              onClick={() => supabase.auth.signOut()}
            >
              Log out
            </Button>
            {error && <Typography.Text type="danger">Failed to fetch user!</Typography.Text>}
            {data && !error ? (
              <>
                <Typography.Text type="success">User data retrieved server-side (in API route):</Typography.Text>

                <Typography.Text>
                  <pre>{JSON.stringify(data, null, 2)}</pre>
                </Typography.Text>
              </>
            ) : (
              <div>Loading...</div>
            )}

            <Typography.Text>
              <NextLink href="/profile">
                <a>SSR example with getServerSideProps</a>
              </NextLink>
            </Typography.Text>
          </>
        )}
      </Space>
    )
  }

  return (
    <>
      <PageLayout>
        <Flex flexDir="column" alignItems="center">
          <LoginCard py="2">
            <LoginForm />
          </LoginCard>
          <VStack spacing={3} py="8">
            <chakra.span alignSelf="center" fontSize="md" color={bg}>
              Authentication powered by
            </chakra.span>
            <chakra.span fontWeight="bold" fontSize="6xl" textShadow="2px 0 currentcolor">
              <img src="https://app.supabase.io/img/supabase-dark.svg" width="128" alt="Dark themed supabase logo" />
            </chakra.span>
          </VStack>
        </Flex>
      </PageLayout>
    </>
  )
}

export default LoginPage
