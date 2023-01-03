import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import {
  ImageListContainer,
  ImageListItem,
  SuccessContainer,
} from '../styles/pages/success'

import img from '../assets/shirts/2.png'
import { Header } from '../components/Header'

interface SuccessProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noIndex" />
      </Head>
      <Header success />

      {/* <SuccessContainer>
        <h1>Compra efetuada!</h1>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={120}
            height={110}
          />
        </ImageContainer>
        <p>
          Uhuul <strong>{customerName}</strong>, sua Camiseta{' '}
          <strong>{product.name}</strong> já está a caminho da sua casa.{' '}
        </p>

        <Link href="/">Voltar ao catalogo.</Link>
      </SuccessContainer> */}
      <SuccessContainer>
        <ImageListContainer>
          <ImageListItem>
            <Image src={img} alt="" width={130} height={110} />
          </ImageListItem>
          <ImageListItem>
            <Image src={img} alt="" width={130} height={110} />
            <span>3</span>
          </ImageListItem>
          <ImageListItem>
            <Image src={img} alt="" width={130} height={110} />
            <span>2x</span>
          </ImageListItem>
          <ImageListItem>
            <Image src={img} alt="" width={130} height={110} />
            <span>3x</span>
          </ImageListItem>
        </ImageListContainer>
        <h1>Compra efetuada!</h1>
        <p>
          Uhuul <strong>McLovin</strong>, sua compra de 3 Camisetas já está a
          caminho da sua casa.{' '}
        </p>

        <Link href="/">Voltar ao catalogo.</Link>
      </SuccessContainer>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   if (!query.session_id) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

//   const sessionId = String(query.session_id)

//   const session = await stripe.checkout.sessions.retrieve(sessionId, {
//     expand: ['line_items', 'line_items.data.price.product'],
//   })

//   const customerName = session.customer_details?.name

//   const product = session.line_items?.data[0].price?.product as Stripe.Product

//   return {
//     props: {
//       customerName,
//       product: {
//         name: product.name,
//         imageUrl: product.images[0],
//       },
//     },
//   }
// }
