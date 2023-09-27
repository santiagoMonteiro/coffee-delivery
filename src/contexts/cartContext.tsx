import { ReactNode, createContext, useState } from 'react'
import { coffeeSchema } from '@/schemas/coffeeSchema'

interface CartContextData {
  cartItems: Item[]
  totalPrice: number
  addItemToCart: (id: number, amount: number) => void
  removeItemFromCart: (id: number) => void
  calculateItemPrice: (id: number, amount: number) => void
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

  console.log(cartItems.length)

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + calculateItemPrice(item.id, item.amount)
  }, 0)

  function addItemToCart(id: number, amount: number) {
    let isNewItem = true

    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        isNewItem = false
        return {
          id,
          amount: item.amount + amount,
        }
      }

      return item
    })

    if (isNewItem) {
      setCartItems([...cartItems, { id, amount }])
    } else {
      setCartItems(newCartItems)
    }
  }

  function removeItemFromCart(id: number) {
    const newCartItems = cartItems.filter((item) => item.id !== id)

    setCartItems(newCartItems)
  }

  function calculateItemPrice(id: number, amount: number) {
    const coffeeItem = coffeeSchema.find((item) => item.id === id)

    return coffeeItem!.price * amount
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        addItemToCart,
        removeItemFromCart,
        calculateItemPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
