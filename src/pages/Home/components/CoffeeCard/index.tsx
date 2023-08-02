import { Tags } from '../Tags'
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
      <Tags tagList={tags} />
      <h3>{name}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
