import { coffeeSchema } from '../CoffeeCard/coffeeSchema'
import { CoffeeCard } from '../CoffeeCard'
import styles from './styles.module.scss'

export function CoffeeContainer() {
  return (
    <div>
      {coffeeSchema.map((coffeeData) => (
        <CoffeeCard coffeeData={coffeeData} />
      ))}
    </div>
  )
}
