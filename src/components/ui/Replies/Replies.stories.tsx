import React from 'react'
import { Story, Meta } from '@storybook/react'

import Replies from '@components/ui/Replies'
// import * as DependentStories from './Dependent.stories'

export default {
  title: 'Replies',
  component: Replies,
} as Meta

const Template: Story = (args) => <Replies replies={[]} {...args} />

export const Default = Template.bind({})
Default.args = {
  //   ...DependentStories.Default.args,
}

export const Preview = Template.bind({})
Preview.args = {
  //   ...DependentStories.Default.args,
  preview: true,
}
