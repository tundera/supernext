import type { NextApiRequest, NextApiResponse } from 'next'

import type { PrismaClient } from 'db'

export interface Context {
  prisma: PrismaClient
  req: NextApiRequest
  res: NextApiResponse
}
