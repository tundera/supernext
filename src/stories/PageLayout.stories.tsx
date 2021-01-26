import type { PageLayoutProps } from '@components/layouts/PageLayout'

import React from 'react'
import { Story, Meta } from '@storybook/react'

import PageLayout from '@components/layouts/PageLayout'
import * as NavbarStories from './Navbar.stories'
import * as ContainerStories from './Container.stories'

export default {
  title: 'PageLayout',
  component: PageLayout,
} as Meta

const Template: Story<PageLayoutProps> = (args) => <PageLayout {...args} />

export const Default = Template.bind({})
Default.args = {
  ...NavbarStories.Default.args,
}

export const Preview = Template.bind({})
Preview.args = {
  ...NavbarStories.Default.args,
  ...ContainerStories.Default.args,
  preview: true,
}
