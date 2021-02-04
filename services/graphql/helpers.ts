import { PrismaClient } from 'db'
import { Context } from './types'

export const prisma = new PrismaClient()

export const createContext = (ctx: any): Context => {
  return {
    ...ctx,
    prisma,
  }
}

export const isDev = () => process.env.NODE_ENV === 'development'
