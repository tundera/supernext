import type { FC } from 'react'

import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Container from '@components/sections/Container'
import PreviewBanner from '@components/sections/PreviewBanner'

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
