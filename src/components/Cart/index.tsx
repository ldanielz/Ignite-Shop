import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { Handbag, X } from 'phosphor-react'
import {
  CartConfirmationQtd,
  CartConfirmationSection,
  CartConfirmationTotal,
  CartContainer,
  CartProcuctCardDetails,
  CartProductCard,
  CloseButton,
  Content,
  Description,
  Overlay,
  Title,
} from '../../styles/components/cart'
import img1 from '../../assets/shirts/2.png'
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
          <div>
            <Title>Sacola de compras</Title>
            <Description>
              <CartProductCard>
                <Image src={img1} alt="" />
                <CartProcuctCardDetails>
                  <p>Camiseta Beyond the Limits</p>
                  <strong>R$ 79.90</strong>

                  <footer>Remover</footer>
                </CartProcuctCardDetails>
              </CartProductCard>
              <CartProductCard>
                <Image src={img1} alt="" />
                <CartProcuctCardDetails>
                  <p>Camiseta Beyond the Limits</p>
                  <strong>R$ 79.90</strong>

                  <footer>Remover</footer>
                </CartProcuctCardDetails>
              </CartProductCard>
              <CartProductCard>
                <Image src={img1} alt="" />
                <CartProcuctCardDetails>
                  <p>Camiseta Beyond the Limits</p>
                  <strong>R$ 79.90</strong>

                  <footer>Remover</footer>
                </CartProcuctCardDetails>
              </CartProductCard>
            </Description>
          </div>
          <CartConfirmationSection>
            <CartConfirmationQtd>
              <p>Quantidade</p>
              <span>3 itens</span>
            </CartConfirmationQtd>
            <CartConfirmationTotal>
              <strong>ValorTotal</strong>
              <span>R$ 270.00</span>
            </CartConfirmationTotal>
            <button>Finalizar Compra</button>
          </CartConfirmationSection>
          <CloseButton asChild>
            <X size={24} />
          </CloseButton>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
