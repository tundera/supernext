import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS

  if (req.query.secret !== process.env.NEXT_SANITY_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // if (req.query.secret !== process.env.NEXT_SANITY_PREVIEW_SECRET) {
  //   return res.status(401).json({ message: 'Invalid token' })
  // }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the home page in preview mode
  res.writeHead(307, { Location: req.query.slug ? `/blog/${req.query.slug}` : '/blog' })
  res.end()
}
