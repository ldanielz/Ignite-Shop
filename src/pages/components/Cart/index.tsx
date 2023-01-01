import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { CartContainer, Content, Description, Overlay, Title } from './styles'
import img1 from '../../../assets/shirts/2.png'
export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartContainer>
          <button>Cart</button>
          <Handbag size={24} />
        </CartContainer>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>Sacola de compras</Title>
          <Description>
            <div>
              <Image src={img1} alt="" />
              <div>
                <title>Camiseta Beyond the Limits</title>
                <p>R$ 79.90</p>
                <footer>Remover</footer>
              </div>
            </div>
          </Description>
          <Dialog.Close asChild>
            <button>Botao</button>
          </Dialog.Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
