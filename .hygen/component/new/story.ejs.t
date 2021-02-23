---
to: src/components/<%= [h.inflection.camelize(h.dirName(name), true), h.camelizedBaseName(name)].filter(Boolean).join('/') %>/<%= h.camelizedBaseName(name) %>.stories.tsx
---
<% formattedPath = h.camelizedPathName(name) -%>
<% component = h.camelizedBaseName(name) -%>
import React from 'react'
import { Story, Meta } from '@storybook/react'

import <%= component %> from '@components/<%=formattedPath%>'
// import * as DependentStories from './Dependent.stories'

export default {
  title: '<%= component %>',
  component: <%= component %>,
} as Meta

const Template: Story = (args) => <<%= component %> title="<%= component %> Story" {...args} />

export const Default = Template.bind({})
Default.args = {
  //   ...DependentStories.Default.args,
}

export const Preview = Template.bind({})
Preview.args = {
  //   ...DependentStories.Default.args,
  preview: true,
}
