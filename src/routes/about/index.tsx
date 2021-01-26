import { Heading, Flex, Divider } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import Features from '@components/sections/Features'
import Overview from '@components/sections/Overview'
import ThemeableButton from '@components/ui/buttons/ThemableButton'
import { ThemableMenu, ThemableMenuItem } from '@components/ui/menus/ThemableMenu'
import ThemableBadge from '@components/ui/ThemableBadge'

import { features } from 'src/constants'

const AboutIndex = () => {
  return (
    <>
      <PageLayout>
        <Flex flexDir="column" alignItems="center">
          <Heading as="h1" size="4xl" mt={8} p={2}>
            About
          </Heading>
          <Features />
          <ThemeableButton my="32px" size="lg" variant="solid">
            Themed Button
          </ThemeableButton>
          <ThemableMenu>
            <ThemableMenuItem my="2">Amazing</ThemableMenuItem>
            <Divider />
            <ThemableMenuItem my="2">Menu</ThemableMenuItem>
          </ThemableMenu>
          <ThemableBadge>Themed Badge</ThemableBadge>
          <Overview features={features} />
        </Flex>
      </PageLayout>
    </>
  )
}

export default AboutIndex
