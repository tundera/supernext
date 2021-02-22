import type { CustomNextPage as NextPage } from 'types'
import type { GetServerSideProps } from 'next'

import { providers } from 'next-auth/client'
import { Flex } from '@chakra-ui/react'

import { getLayout } from '@components/layouts/SiteLayout'

import LoginForm from '@components/ui/CustomLoginForm'

interface Props {
  providers: any
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      providers: await providers(),
    },
  }
}

const SignInPage: NextPage<Props> = ({ providers }) => {
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <LoginForm providers={providers} />
      </Flex>
    </>
  )
}

SignInPage.getLayout = getLayout

export default SignInPage
