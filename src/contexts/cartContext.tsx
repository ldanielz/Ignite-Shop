import { createContext, ReactNode, useState } from 'react'

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  priceNumber: number
  description: string
  defaultPriceId: string
}
interface CartContextProps {
  cartItems: ProductProps[]
  cartTotalPrice: number
  addCart: (product: ProductProps) => void
  removeCart: (productId: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<ProductProps[]>([])

  const cartTotalPrice = cartItems.reduce((total, product) => {
    return total + product.priceNumber
  }, 0)
  function addCart(product: ProductProps) {
    setCartItems((state) => [...state, product])
  }

  function removeCart(productId: string) {
    const newCartFiltered = cartItems.filter(
      (product) => product.id !== productId,
    )
    setCartItems(newCartFiltered)
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addCart, cartTotalPrice, removeCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
