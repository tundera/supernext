import { render } from 'test/utils'

import CountrySearch from '@components/CountrySearch'

test('renders CountrySearch component with title', () => {
  const { getByText } = render(<CountrySearch title="CountrySearch" />)
  const title = getByText(/CountrySearch/)
  expect(title).toBeInTheDocument()
})
