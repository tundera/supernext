import React from 'react'
import { Story, Meta } from '@storybook/react'

import Navbar from '@components/sections/headers/Navbar'

export default {
  title: 'Header',
  component: Navbar,
} as Meta

const Template: Story = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {}
