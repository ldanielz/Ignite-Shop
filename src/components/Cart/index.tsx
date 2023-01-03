import * as Dialog from '@radix-ui/react-dialog'
import { useState, MouseEvent } from 'react'
import Image from 'next/image'
import { Handbag, X } from 'phosphor-react'
import {
  CartConfirmationQtd,
  CartConfirmationSection,
  CartConfirmationTotal,
  CartContainer,
  CartProductCardDetails,
  CartProductCard,
  CloseButton,
  Content,
  Description,
  Overlay,
  Title,
  CartLength,
} from '../../styles/components/cart'
import { useCart } from '../../hooks/useCart'
import axios from 'axios'
export function Cart() {
  const { cartItems, cartTotalPrice, removeCart } = useCart()

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const formattedTotalPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotalPrice / 100)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        products: cartItems,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl // redirecionamento para pagina externa

      // router.push('checkout')
      // redirencionamento para pagina interna
    } catch (error) {
      // Conectar com uma ferramenta de observalidade {Datalog / Sentry}
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar o checkout.')
    }
  }

  function handleRemoveCartItem(
    event: MouseEvent<HTMLButtonElement>,
    productId: string,
  ) {
    event.preventDefault()
    removeCart(productId)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartContainer disabled={cartItems.length === 0}>
          <Handbag size={24} weight="bold" />
          {cartItems.length > 0 && <CartLength>{cartItems.length}</CartLength>}
        </CartContainer>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <div>
            <Title>Sacola de compras</Title>
            <Description>
              {cartItems.length > 0 &&
                cartItems.map((cartItem) => {
                  return (
                    <CartProductCard key={cartItem.id}>
                      <Image
                        src={cartItem.imageUrl}
                        alt={cartItem.name}
                        width={102}
                        height={93}
                      />
                      <CartProductCardDetails>
                        <p>{cartItem.name}</p>
                        <strong>{cartItem.price}</strong>
                        <button
                          onClick={(event) =>
                            handleRemoveCartItem(event, cartItem.id)
                          }
                        >
                          Remover
                        </button>
                      </CartProductCardDetails>
                    </CartProductCard>
                  )
                })}
            </Description>
          </div>
          <CartConfirmationSection>
            <CartConfirmationQtd>
              <p>Quantidade</p>
              <span>
                {cartItems.length > 1
                  ? `${cartItems.length} itens`
                  : `${cartItems.length} item`}
              </span>
            </CartConfirmationQtd>
            <CartConfirmationTotal>
              <p>ValorTotal</p>
              <strong>{formattedTotalPrice}</strong>
            </CartConfirmationTotal>
            <button
              onClick={handleBuyProduct}
              disabled={isCreatingCheckoutSession}
            >
              Finalizar Compra
            </button>
          </CartConfirmationSection>
          <CloseButton asChild>
            <X size={24} />
          </CloseButton>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
