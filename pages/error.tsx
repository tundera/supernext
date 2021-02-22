import type { CustomNextPage as NextPage } from 'types'

import Animated404 from '@components/ui/tailwind/error/Animated404'

import { getLayout } from '@components/layouts/SiteLayout'

const ErrorPage: NextPage = () => {
  return (
    <>
      <Animated404 />
    </>
  )
}

ErrorPage.getLayout = getLayout

export default ErrorPage
