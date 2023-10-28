'use server'

import { eTemplate } from '@/lib/eTemplate'
import { sendEmail } from '@/lib/nodemailer'

export async function send({
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
}: {
  email: string
  name: string
  phone: string
  message: string
  service: {
    eCommerce: boolean
    mobileDevelopment: boolean
    seoOptimization: boolean
    webDesign: boolean
    dbDevelopment: boolean
    brand: boolean
  }
}) {
  try {
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

    const result = await sendEmail({
      to: 'ahmaat19@gmail.com',
      subject: 'Contact Us',
      text: msg,
    })

    return {
      message: `Thank you for contacting me, I'll be in touch very soon.`,
    }
  } catch (err: any) {
    throw new Error(err?.message)
  }
}
