/* eslint-disable jsx-a11y/anchor-is-valid */
import type { CustomNextPage as NextPage } from 'types'
import type { User } from '@supabase/supabase-js'

import { Flex, Heading, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Card, Typography, Space } from '@supabase/ui'
import { supabase } from '@lib/supabase'
// import { useQuery } from 'react-query'

import { getLayout } from '@components/layouts/SiteLayout'
// import { getQueryData } from '@lib/data'

type Props = {
  user: User
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    return { props: {}, redirect: { destination: '/', permanent: false } }
  }

  return { props: { user } }
}

const ProfilePage: NextPage<Props> = ({ user }) => {
  // const { data, isLoading, isError, error } = useQuery('key', getData)
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Heading as="h1">Profile Page</Heading>
        <Box maxWidth="420px" margin="96px auto">
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
                <NextLink href="/">
                  <a>Static example with useSWR</a>
                </NextLink>
              </Typography.Text>
            </Space>
          </Card>
        </Box>
      </Flex>
    </>
  )
}

ProfilePage.getLayout = getLayout

export default ProfilePage

export type { Props as ProfilePageProps }
