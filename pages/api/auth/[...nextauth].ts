import type { NextApiRequest, NextApiResponse } from 'next'

import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import db from 'db'

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, {
    pages: {
      signIn: '/auth/signin',
    },
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
      Providers.Email({
        server: {
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT),
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          },
        },
        from: process.env.SMTP_FROM, // The "from" address that you want to use
      }),
    ],
    adapter: Adapters.Prisma.Adapter({ prisma: db }),
    secret: process.env.PRISMA_SECRET,
  })
