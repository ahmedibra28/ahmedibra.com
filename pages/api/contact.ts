import type { NextApiRequest, NextApiResponse } from 'next'
import { eTemplate } from '../../utils/eTemplate'
import { sendEmail } from '../../utils/nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'POST')
      return res.status(404).json({ error: 'Method not allowed' })

    const {
      email,
      name,
      phone,
      message,
      service: {
        eCommerce,
        mobileDevelopment,
        seoOptimization,
        webDesign,
        dbDevelopment,
        brand,
      },
    } = req.body

    let services = []
    if (eCommerce) services.push('E-Commerce')
    if (mobileDevelopment) services.push('Mobile Development')
    if (seoOptimization) services.push('SEO Optimization')
    if (webDesign) services.push('Web Design')
    if (dbDevelopment) services.push('Database Development')
    if (brand) services.push('Branding')

    const msg = eTemplate({
      email,
      name,
      phone,
      message,
      services,
    })

    const result = sendEmail({
      to: 'info@ahmedibra.com',
      subject: 'Contact Us',
      text: msg,
    })

    if (await result)
      return res.status(200).json({
        message: `Thank you for contacting me, I'll be in touch very soon.`,
      })
  } catch (error: any) {
    return res.status(400).json({ error: error.message })
  }
}
