import { Heading, Flex, Divider } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import Features from '@components/sections/Features'
import Button from '@components/ui/buttons/Button'
import { ThemableMenu, ThemableMenuItem } from '@components/ui/menus/ThemableMenu'
import ThemableBadge from '@components/ui/ThemableBadge'

const AboutIndex = () => {
  return (
    <>
      <PageLayout>
        <Flex flexDir="column" alignItems="center">
          <Heading as="h1" size="4xl" mt={8} p={2}>
            About
          </Heading>
          <Features />
          <Button my="32px" size="lg" variant="solid">
            Themed Button
          </Button>
          <ThemableMenu>
            <ThemableMenuItem my="2">Amazing</ThemableMenuItem>
            <Divider />
            <ThemableMenuItem my="2">Menu</ThemableMenuItem>
          </ThemableMenu>
          <ThemableBadge>Themed Badge</ThemableBadge>
        </Flex>
      </PageLayout>
    </>
  )
}

export default AboutIndex
