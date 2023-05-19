import coffeeBannerImg from '../../assets/coffee-banner.svg'

import styles from "./styles.module.scss"
import { DeliverySkillsContainer } from './components/DeliverySkillsContainer'

export function Home() {
  return (
    <main>
      <section className={styles.generalInfoContainer}>
        <div className={styles.infoContainer}>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <DeliverySkillsContainer />
        </div>
        <img className={styles.coffeeBanner} src={coffeeBannerImg} alt="" />
      </section>
      <section className={styles.coffeeContainer}>
        <h2>Nossos cafés</h2>

      </section>
    </main>
  )
}
