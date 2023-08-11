import { ReactNode, createContext, useState } from 'react'

interface CartContextData {
  cartItems: Item[]
}

interface Item {
  id: number
  amount: number
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Item[]>([])

  return (
    <CartContext.Provider value={{ cartItems }}>
      { children }
    </CartContext.Provider>
  )
}