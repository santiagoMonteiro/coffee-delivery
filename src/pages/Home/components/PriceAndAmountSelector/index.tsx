import { AddToCartButton } from '../AddToCartButton'
import { AmountSelector } from '../AmountSelector'
import { Price } from '../Price'
import styles from './styles.module.scss'

export function PriceAndAmountSelector() {
  return (
    <div className={styles.container}>
      <Price />
      <div className={styles.container}>
        <AmountSelector />
        <AddToCartButton />
      </div>
    </div>
  )
}
