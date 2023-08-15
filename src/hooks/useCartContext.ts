import { CartContext } from '@/contexts/cartContext'
import { useContext } from 'react'

export const useCartContext = () => useContext(CartContext)
