import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'GET')
      return res.status(404).json({ error: 'Method not allowed' })
  } catch (error: any) {
    return res.status(400).json({ error: error.message })
  }
}
