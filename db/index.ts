// Temporary module for replacing experimental next-plugin-prisma until stable

import { PrismaClient } from '@prisma/client'

export * from '@prisma/client'

const getPrismaClient = () => {
  let prisma: PrismaClient

  if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
  } else {
    // Ensure the prisma instance is re-used during hot-reloading
    // Otherwise, a new client will be created on every reload
    // @ts-expect-error
    globalThis.prisma = globalThis.prisma || new PrismaClient()
    // @ts-expect-error
    prisma = globalThis.prisma
  }

  return prisma
}

const db = getPrismaClient()

export default db
