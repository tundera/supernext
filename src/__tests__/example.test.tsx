import { render } from 'test/utils'

test('renders deploy link', () => {
  const { getByText } = render(<h1 id="welcome-to-the-site">Welcome to the Site</h1>)
  const linkElement = getByText(/Welcome to the Site/)
  expect(linkElement).toBeInTheDocument()
})
