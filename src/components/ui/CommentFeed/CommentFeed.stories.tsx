import React from 'react'
import { Story, Meta } from '@storybook/react'

import CommentFeed from '@components/ui/CommentFeed'
// import * as DependentStories from './Dependent.stories'

export default {
  title: 'CommentFeed',
  component: CommentFeed,
} as Meta

const Template: Story = (args) => <CommentFeed {...args} />

export const Default = Template.bind({})
Default.args = {
  //   ...DependentStories.Default.args,
}

export const Preview = Template.bind({})
Preview.args = {
  //   ...DependentStories.Default.args,
  preview: true,
}
