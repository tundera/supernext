import type { NextApiRequest, NextApiResponse } from 'next'

import type { PrismaClient } from '@prisma/client'

export interface Context {
  db: PrismaClient
  req: NextApiRequest
  res: NextApiResponse
}
