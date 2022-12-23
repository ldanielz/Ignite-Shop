import type { AppProps } from 'next/app'
import Image from 'next/image'

import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

import logoImage from '../assets/img/logo-ignite-shop.svg'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href={'/'} prefetch={false}>
          <Image src={logoImage} alt="" />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
