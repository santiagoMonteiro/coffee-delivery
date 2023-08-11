import { coffeeSchema } from '@/schemas/coffeeSchema'
import { CoffeeCard } from '../CoffeeCard'
import styles from './styles.module.scss'

export function CoffeeMenu() {
  return (
    <section className={styles.coffeeSessionContainer}>
      <h2>Nossos cafés</h2>
      <div className={styles.coffeeSetContainer}>
        {coffeeSchema.map((coffeeData) => (
          <CoffeeCard coffeeData={coffeeData} />
        ))}
      </div>
    </section>
  )
}
