import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Please set the DATOCMS_PREVIEW_SECRET env variable
  // on Vercel/Netlify, or everyone will be able to enter Preview Mode and
  // see draft content!

  const secret = process.env.DATOCMS_PREVIEW_SECRET

  // Check the secret and next parameters
  if (secret && req.query.secret !== secret) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the homepage
  res.writeHead(307, { Location: '/' })
  res.end()
}
