import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  // const secret = process.env.NEXT_DATOCMS_PREVIEW_SECRET

  // // // Check the secret and next parameters
  // if (secret && req.query.secret !== secret) {
  //   return res.status(401).json({ message: 'Invalid token' })
  // }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the homepage
  res.writeHead(307, { Location: '/' })
  res.end()
}
