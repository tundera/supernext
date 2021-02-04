import type { NextApiRequest, NextApiResponse } from 'next'

import type { PrismaClient } from 'db'

export interface Context {
  db: PrismaClient
  req: NextApiRequest
  res: NextApiResponse
}
