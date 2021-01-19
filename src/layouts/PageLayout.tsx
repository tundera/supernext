import type { FC } from 'react'

import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Container from '@layouts/Container'
// import PreviewBanner from '@components/PreviewBanner'

type Props = {
  preview?: boolean
}

const PageLayout: FC<Props> = ({ preview = false, children }) => {
  return (
    <div>
      {/* {process.env.NODE_ENV === 'development' && <PreviewBanner preview={preview} />} */}
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}

export default PageLayout
