/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'

import NextLink from 'next/link'
import { Flex, Heading } from '@chakra-ui/react'
import { Auth, Card, Typography, Space, Button, Icon } from '@supabase/ui'
import { supabase } from '@lib/supabase'
import { FaArrowLeft } from 'react-icons/fa'

import PageLayout from '@components/layouts/PageLayout'
import { useSupabaseAuth } from '@hooks/data/useSupabaseAuth'

const LoginPage: NextPage = () => {
  const { user, session } = Auth.useUser()

  const { view, query } = useSupabaseAuth(session, '/api/getUser')
  const { data, error } = query

  const View = () => {
    if (!user)
      return (
        <Space direction="vertical" size={8}>
          <div>
            <img src="https://app.supabase.io/img/supabase-dark.svg" width="96" alt="Dark themed supabase logo" />
            <Typography.Title level={3}>Welcome to Supabase Auth</Typography.Title>
          </div>
          <Auth
            supabaseClient={supabase}
            providers={['google', 'github']}
            view={view}
            socialLayout="horizontal"
            socialButtonSize="xlarge"
          />
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
          <Heading as="h1">Login Page</Heading>
          <Card>
            <View />
          </Card>
        </Flex>
      </PageLayout>
    </>
  )
}

export default LoginPage
