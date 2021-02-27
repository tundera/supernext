import { render } from 'test/utils'

import CountrySelector from '@components/CountrySelector'

test('renders CountrySelector component with title', () => {
  const { getByText } = render(<CountrySelector title="CountrySelector" />)
  const title = getByText(/CountrySelector/)
  expect(title).toBeInTheDocument()
})
