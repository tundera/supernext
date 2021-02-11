import type { CustomNextPage as NextPage } from 'types'

import { useColorModeValue, Flex } from '@chakra-ui/react'
import LoginForm from '@components/ui/forms/LoginForm'

import { getLayout } from '@components/layouts/SiteLayout'

const LoginPage: NextPage = () => {
  const color = useColorModeValue('whiteAlpha.900', 'brand.500')

  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <LoginForm />
      </Flex>
    </>
  )
}

LoginPage.getLayout = getLayout

export default LoginPage
