import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import {
  ImageListContainer,
  ImageListItem,
  SuccessContainer,
} from '../styles/pages/success'

import { Header } from '../components/Header'
import { GetServerSideProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'

interface SuccessProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
  productsData: Stripe.Product[]
}

export default function Success({ customerName, productsData }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noIndex" />
      </Head>
      <Header success />

      <SuccessContainer>
        <ImageListContainer>
          {productsData.map((product) => {
            return (
              <ImageListItem key={product.id}>
                <Image
                  src={product.images[0]}
                  alt=""
                  width={130}
                  height={110}
                />
                <span>1</span>
              </ImageListItem>
            )
          })}
        </ImageListContainer>
        <h1>Compra efetuada!</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          {productsData.length > 1
            ? `${productsData.length} Camisetas`
            : `${productsData.length} Camiseta`}{' '}
          já está a caminho da sua casa.{' '}
        </p>

        <Link href="/" prefetch={false}>
          Voltar ao catalogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name

  const productsData = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product
    return product
  })

  return {
    props: {
      customerName,
      productsData,
    },
  }
}
