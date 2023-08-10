import styles from './styles.module.scss'

import { ShoppingCartSimple } from '@phosphor-icons/react'

export function AddToCartButton() {
  return (
    <button className={styles.button}>
      <ShoppingCartSimple weight='fill' />
    </button>
  )
}