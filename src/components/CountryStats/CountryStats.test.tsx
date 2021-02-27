import { render } from 'test/utils'

import CountryStats from '@components/CountryStats'

test('renders CountryStats component with title', () => {
  const { getByText } = render(<CountryStats title="CountryStats" />)
  const title = getByText(/CountryStats/)
  expect(title).toBeInTheDocument()
})
