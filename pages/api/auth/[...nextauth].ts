import type { NextApiRequest, NextApiResponse } from 'next'

import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import db from 'db'

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, {
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
    ],
    adapter: Adapters.Prisma.Adapter({ prisma: db }),
    secret: process.env.PRISMA_SECRET,
  })
