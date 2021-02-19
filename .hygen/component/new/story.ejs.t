---
to: src/components/<%=type%>/<%= [h.inflection.camelize(h.dirName(name)), h.camelizedBaseName(name)].filter(Boolean).join('/') %>/<%= [h.inflection.camelize(h.dirName(name)), h.camelizedBaseName(name)].filter(Boolean).join('/') %>.stories.tsx
---
<% formattedPath = h.camelizedPathName(name) -%>
<% component = h.camelizedBaseName(name) -%>
import React from 'react'
import { Story, Meta } from '@storybook/react'

import <% component %> from '@components/layouts/<%component %>'
// import * as DependentStories from './Dependent.stories'

export default {
  title: '<% component %>',
  component: <<% component %>>,
} as Meta

const Template: Story = (args) => <<% component %>> {...args} />

export const Default = Template.bind({})
Default.args = {
//   ...DependentStories.Default.args,
}

export const Preview = Template.bind({})
Preview.args = {
//   ...DependentStories.Default.args,
  preview: true,
}
