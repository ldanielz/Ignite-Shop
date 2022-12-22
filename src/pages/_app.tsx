import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImage from '../assets/img/logo-ignite-shop.svg'
import { Container, Header } from '../styles/pages/app'
console.log(logoImage)

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImage.src} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
