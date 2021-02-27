import React from 'react'
import { Story, Meta } from '@storybook/react'

import CountrySelector from '@components/CountrySelector'
// import * as DependentStories from './Dependent.stories'

export default {
  title: 'CountrySelector',
  component: CountrySelector,
} as Meta

const Template: Story = (args) => <CountrySelector title="CountrySelector Story" {...args} />

export const Default = Template.bind({})
Default.args = {
  //   ...DependentStories.Default.args,
}

export const Preview = Template.bind({})
Preview.args = {
  //   ...DependentStories.Default.args,
  preview: true,
}
