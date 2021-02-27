import React from 'react'
import { Story, Meta } from '@storybook/react'

import CountryStats from '@components/CountryStats'
// import * as DependentStories from './Dependent.stories'

export default {
  title: 'CountryStats',
  component: CountryStats,
} as Meta

const Template: Story = (args) => <CountryStats title="CountryStats Story" {...args} />

export const Default = Template.bind({})
Default.args = {
  //   ...DependentStories.Default.args,
}

export const Preview = Template.bind({})
Preview.args = {
  //   ...DependentStories.Default.args,
  preview: true,
}
