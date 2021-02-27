import React from 'react'
import { Story, Meta } from '@storybook/react'

import CountrySearch from '@components/CountrySearch'
// import * as DependentStories from './Dependent.stories'

export default {
  title: 'CountrySearch',
  component: CountrySearch,
} as Meta

const Template: Story = (args) => <CountrySearch title="CountrySearch Story" {...args} />

export const Default = Template.bind({})
Default.args = {
  //   ...DependentStories.Default.args,
}

export const Preview = Template.bind({})
Preview.args = {
  //   ...DependentStories.Default.args,
  preview: true,
}
