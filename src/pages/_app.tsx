import type { AppProps } from 'next/app'
import { CartContextProvider } from '../contexts/cartContext'

import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
