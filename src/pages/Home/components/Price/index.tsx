import styles from './styles.module.scss'

export function Price() {
  return (
    <span className={styles.value}>
      <span className={styles.prefix}>R$</span>9,90
    </span>
  )
}
