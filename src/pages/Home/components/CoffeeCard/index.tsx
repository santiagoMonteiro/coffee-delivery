import { CoffeeTags } from '../CoffeeTags'
import { PriceAndAmountSelector } from '../PriceAndAmountSelector'
import styles from "./styles.module.scss"

interface CoffeeCardProps {
  coffeeData: {
    name: string
    description: string
    price: number
    tags: string[]
    src: string
  }
}

export function CoffeeCard({ coffeeData: { name, src, description, tags } }: CoffeeCardProps) {
  return (
    <div className={styles.cardContainer}>
      <img src={src} alt="" />
      <CoffeeTags tagList={tags} />
      <h3>{name}</h3>
      <p className={styles.description}>{description}</p>
      <PriceAndAmountSelector />
    </div>
  )
}
