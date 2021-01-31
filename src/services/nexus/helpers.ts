import { PrismaClient } from '@prisma/client'
import { sign, verify } from 'jsonwebtoken'
import { AuthenticationError, UserInputError } from 'apollo-server-micro'
import { tokens } from '../../utils/constants'
import { Context, Token } from './types'

const APP_SECRET = process.env.APP_SECRET ?? ''

export const handleError = (error: any) => {
  // add any other logging mechanism here e.g. Sentry
  throw error
}

export const generateAccessToken = (userId: number) => {
  const accessToken = sign(
    {
      userId,
      type: tokens.access.name,
      timestamp: Date.now(),
    },
    APP_SECRET,
    {
      expiresIn: tokens.access.expiry,
    },
  )
  return accessToken
}

export const prisma = new PrismaClient()

export const createContext = (ctx: any): Context => {
  let userId: number
  try {
    const Authorization = ctx.req.get('Authorization')

    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET) as Token

    if (!verifiedToken.userId && verifiedToken.type !== tokens.access.name) userId = -1
    else userId = verifiedToken.userId
  } catch (err) {
    userId = -1
  }
  return {
    ...ctx,
    prisma,
    userId,
  }
}

export const isDev = () => process.env.NODE_ENV === 'development'

export const errors = {
  notAuthenticated: new AuthenticationError('Unauthenticated user!'),
  userAlreadyExists: new UserInputError('User already exists!'),
  invalidUser: new UserInputError('Invalid username or password'),
}
