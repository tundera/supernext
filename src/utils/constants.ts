import { AuthenticationError, UserInputError } from 'apollo-server-micro'

export const POSTS_PER_PAGE = 10

export const features = [
  { category: 'Frontend', items: ['Next.js', 'Chakra-UI'] },
  { category: 'Services', items: ['GraphQL', 'Prisma'] },
]

const accessToken = {
  name: 'ACCESS_TOKEN',
  expiry: '1d',
}

export const tokens = {
  access: accessToken,
}

export const isDev = () => process.env.NODE_ENV === 'development'

export const errors = {
  notAuthenticated: new AuthenticationError('Unauthenticated user!'),
  userAlreadyExists: new UserInputError('User already exists!'),
  invalidUser: new UserInputError('Invalid username or password'),
}
