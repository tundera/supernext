import type { NextApiRequest, NextApiResponse } from 'next'

import { Backend } from 'services/nest/main'

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const handler = await Backend.getListener()
  handler(req, res)
}
