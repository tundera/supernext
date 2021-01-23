import type { FC } from 'react'

import Navbar from 'src/components/sections/Navbar'
import Footer from 'src/components/sections/Footer'
import Container from 'src/components/sections/Container'
import PreviewBanner from 'src/components/sections/PreviewBanner'

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
