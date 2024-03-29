import { DeliveryInfo } from '../DeliverySkillsContainer'
import styles from './styles.module.scss'
import coffeeBannerImg from '@/assets/coffee-banner.svg'

export function GeneralInfo() {
  return (
    <section className={styles.generalInfoContainer}>
      <div className={styles.infoContainer}>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <DeliveryInfo />
      </div>
      <img className={styles.coffeeBanner} src={coffeeBannerImg} alt='' />
    </section>
  )
}
