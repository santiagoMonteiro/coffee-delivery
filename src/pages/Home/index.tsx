import { GeneralInfo } from './components/GeneralInfo'
import coffeeBannerImg from '../../assets/coffee-banner.svg'

import styles from "./styles.module.scss"

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
          <GeneralInfo />
        </div>
        <img className={styles.coffeeBanner} src={coffeeBannerImg} alt="" />
      </section>
    </main>
  )
}
