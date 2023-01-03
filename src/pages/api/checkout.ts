import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  priceNumber: number
  description: string
  defaultPriceId: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { products } = req.body as { products: ProductProps[] }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (!products) {
    return res.status(400).json({ error: 'Products not found.' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: cancelUrl,
    success_url: successUrl,
    mode: 'payment',
    line_items: products.map((product) => ({
      price: product.defaultPriceId,
      quantity: 1,
    })),
  })
  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
