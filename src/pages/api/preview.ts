import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {}

export default (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.setPreviewData({})
  res.writeHead(307, { Location: '/' })
  res.end()
}
