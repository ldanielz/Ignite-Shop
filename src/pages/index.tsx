import { GetStaticProps } from 'next'

import Head from 'next/head'

import Image from 'next/image'

import {
  HomeContainer,
  Product,
  ProductInfo,
  ProductInfoCartIcon,
  ProductInfoWrapper,
} from '../styles/pages/home'

import { useKeenSlider } from 'keen-slider/react'

import Stripe from 'stripe'
import { stripe } from '../lib/stripe'

import 'keen-slider/keen-slider.min.css'
import { Handbag } from 'phosphor-react'
interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    rubberband: false,
    slides: {
      perView: 3,
      spacing: 48,
    },
    breakpoints: {
      '(max-width: 1366px)': {
        slides: {
          perView: 2,
          spacing: 24,
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 12,
        },
      },
    },
  })

  function handleAddCart(event: any) {
    event.preventDefault()
    console.log(event)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product
              href={`/product/${product.id}`}
              key={product.id}
              className="keen-slider__slide"
              prefetch={false}
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={520}
                height={480}
              />
              <ProductInfoWrapper>
                <ProductInfo>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </ProductInfo>
                <ProductInfoCartIcon onClick={handleAddCart}>
                  <Handbag size={32} weight="bold" />
                </ProductInfoCartIcon>
              </ProductInfoWrapper>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
