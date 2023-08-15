import { ShoppingCart } from '@phosphor-icons/react'
import styles from './styles.module.scss'
import { useCartContext } from '@/hooks/useCartContext'

export function CartButton() {
  const cartContext = useCartContext()
  return (
    <button className={styles.button}>
      <ShoppingCart color="#C47F17" size={22} weight="fill" />
      <span className={styles.counterLabel}>
        {cartContext.cartItems.length}
      </span>
    </button>
  )
}
