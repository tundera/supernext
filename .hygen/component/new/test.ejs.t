---
to: "<%= location ? `src/components/${location}` : 'src/components' %>/<%= h.camelizedBaseName(name) %>/<%= h.camelizedBaseName(name) %>.test.tsx"
---
<% component = h.camelizedBaseName(name) -%>
<% formattedPath = location ? `${location}/${component}` : component -%>
import { render } from 'test/utils'

import <%= component %> from '@components/<%= formattedPath %>'

test('renders <%= component %> component with title', () => {
  const { getByText } = render(<<%= component %> title="<%= component %>" />)
  const title = getByText(/<%= component %>/)
  expect(title).toBeInTheDocument()
})
