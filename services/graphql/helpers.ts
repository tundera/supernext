import db from 'db'
import { Context } from './types'

export const createContext = (ctx: any): Context => {
  return {
    ...ctx,
    db,
  }
}

export const isDev = () => process.env.NODE_ENV === 'development'
