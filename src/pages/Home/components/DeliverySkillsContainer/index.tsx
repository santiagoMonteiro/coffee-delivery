import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import styles from './styles.module.scss'

export function DeliveryInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.advantageContainer}>
        <div>
          <i style={{background: "var(--yellow-dark)"}}>
            <ShoppingCart weight="fill" />
          </i>
          <span>Compra simples e segura</span>
        </div>
        <div>
          <i style={{background: "var(--yellow)"}}>
            <Timer weight="fill" />
          </i>
          <span>Entrega rápida e rastreada</span>
        </div>
      </div>
      <div className={styles.advantageContainer}>
        <div>
          <i style={{background: "var(--base-text)"}}>
            <Package weight="fill" />
          </i>
          <span>Embalagem mantém o café intacto</span>
        </div>
        <div>
          <i style={{background: "var(--purple)"}}>
            <Coffee weight="fill" />
          </i>
          <span>O café chega fresquinho até você</span>
        </div>
      </div>
    </div>
  )
}
