/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage, GetServerSideProps } from 'next'
import type { User } from '@supabase/supabase-js'

import { Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { Card, Typography, Space } from '@supabase/ui'
import { supabase } from '@lib/supabase'

import SiteLayout from '@components/layouts/SiteLayout'

type Props = {
  user: User
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    // If no user, redirect to index.
    return { props: {}, redirect: { destination: '/', permanent: false } }
  }

  // If there is a user, return it.
  return { props: { user } }
}

const ProfilePage: NextPage<Props> = ({ user }) => {
  return (
    <>
      <SiteLayout>
        <Flex flexDir="column" alignItems="center">
          <Heading as="h1">Profile Page</Heading>
          <Card>
            <Space direction="vertical" size={6}>
              <Typography.Text>You're signed in</Typography.Text>
              <Typography.Text strong>Email: {user.email}</Typography.Text>
              <Typography.Text type="success">
                User data retrieved server-side (from Cookie in getServerSideProps):
              </Typography.Text>

              <Typography.Text>
                <pre>{JSON.stringify(user, null, 2)}</pre>
              </Typography.Text>

              <Typography.Text>
                <Link href="/">
                  <a>Static example with useSWR</a>
                </Link>
              </Typography.Text>
            </Space>
          </Card>
        </Flex>
      </SiteLayout>
    </>
  )
}

export default ProfilePage
