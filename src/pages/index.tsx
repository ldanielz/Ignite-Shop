import { GetStaticProps } from 'next'

import Head from 'next/head'

import Image from 'next/image'

import {
  ArrowNext,
  ArrowPrev,
  HomeContainer,
  Product,
} from '../styles/pages/home'

import { useKeenSlider } from 'keen-slider/react'

import Stripe from 'stripe'
import { stripe } from '../lib/stripe'

import 'keen-slider/keen-slider.min.css'
import { ArrowLeft, ArrowRight } from 'phosphor-react'
interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 2,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <div className="navigation-wrapper">
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
                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            )
          })}
        </HomeContainer>
        <>
          <ArrowPrev>
            <ArrowLeft
              size={32}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />
          </ArrowPrev>
          <ArrowNext>
            <ArrowRight
              size={32}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </ArrowNext>
        </>
      </div>
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
