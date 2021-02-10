import React from 'react'
import { Story, Meta } from '@storybook/react'

import SiteLayout from '@components/layouts/SiteLayout'
import * as HeaderStories from './Header.stories'
import * as ContainerStories from './Container.stories'

export default {
  title: 'SiteLayout',
  component: SiteLayout,
} as Meta

const Template: Story = (args) => <SiteLayout {...args} />

export const Default = Template.bind({})
Default.args = {
  ...HeaderStories.Default.args,
}

export const Preview = Template.bind({})
Preview.args = {
  ...HeaderStories.Default.args,
  ...ContainerStories.Default.args,
  preview: true,
}
