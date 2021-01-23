import type { FC } from 'react'

import Navbar from '@common/components/sections/Navbar'
import Footer from '@common/components/sections/Footer'
import Container from '@common/components/sections/Container'
import PreviewBanner from '@common/components/sections/PreviewBanner'

type Props = {
  preview?: boolean
}

const PageLayout: FC<Props> = ({ preview = false, children }) => {
  return (
    <div>
      {process.env.NODE_ENV === 'development' && <PreviewBanner preview={preview} />}
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}

export default PageLayout
