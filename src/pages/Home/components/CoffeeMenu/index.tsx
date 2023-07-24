import { CoffeeCard } from '../CoffeeCard'
import { coffeeSchema } from '../CoffeeCard/coffeeSchema'
import styles from './styles.module.scss'

export function CoffeeMenu() {
  return (
    <section className={styles.coffeeContainer}>
      <h2>Nossos cafés</h2>
      <div>
        {coffeeSchema.map((coffeeData) => (
          <CoffeeCard coffeeData={coffeeData} />
        ))}
      </div>
    </section>
  )
}
