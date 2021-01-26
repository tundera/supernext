import React from 'react'
import { Story, Meta } from '@storybook/react'

import Navbar from '@components/sections/Navbar'

export default {
  title: 'Navbar',
  component: Navbar,
} as Meta

const Template: Story = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {}
