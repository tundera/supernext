import type { FC } from 'react'

import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Container from '@layouts/Container'

const PageLayout: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}

export default PageLayout
