import type { FC } from 'react'

import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Container from '@layouts/Container'

const PageLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default PageLayout
