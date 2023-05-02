import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import styles from './styles.module.scss'

export function GeneralInfo() {
  return (
    <div className={styles.container}>
      <div>
        <i>
          <ShoppingCart />
        </i>
        <span>Compra simples e segura</span>
      </div>
      <div>
        <i>
          <Package />
        </i>
        <span>Embalagem mantém o café intacto</span>
      </div>
      <div>
        <i>
          <Timer />
        </i>
        <span>Entrega rápida e rastreada</span>
      </div>
      <div>
        <i>
          <Coffee />
        </i>
        <span>O café chega fresquinho até você</span>
      </div>
    </div>
  )
}
