import { ShoppingCart } from '@phosphor-icons/react'
import styles from './styles.module.scss'

export function CartButton() {
  return (
    <button className={styles.button}>
      <ShoppingCart color="#C47F17" size={22} weight="fill" />
      <span className={styles.counterLabel}>
        3
      </span>
    </button>
  )
}
