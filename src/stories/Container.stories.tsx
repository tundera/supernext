import { Story, Meta } from '@storybook/react'

import Container from '@components/sections/Container'

export default {
  title: 'Container',
  component: Container,
} as Meta

const Template: Story = (args) => <Container {...args} />

export const Default = Template.bind({})
Default.args = {}
