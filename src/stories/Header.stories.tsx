import React from 'react'
import { Story, Meta } from '@storybook/react'

import Header from '@components/sections/headers/SiteHeader'

export default {
  title: 'Header',
  component: Header,
} as Meta

const Template: Story = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}
