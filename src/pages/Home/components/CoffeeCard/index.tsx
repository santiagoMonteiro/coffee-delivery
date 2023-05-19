// import styles from "./styles.module.scss"

interface CoffeeCardProps {
  coffeeData: {
    name: string
    description: string
    price: number
    tags: string[]
    src: string
  }
}

export function CoffeeCard({ coffeeData: { name, src, description } }: CoffeeCardProps) {
  return (
    <div>
      <img src={src} alt="" />
      <span>{}</span>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}
