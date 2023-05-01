import styles from './styles.module.scss'
import logo from '../../assets/logo.svg'
import { MapPin } from '@phosphor-icons/react'
import { CartButton } from '../CartButton'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logo} alt="" />
      <div className={styles.generalInfo}>
        <div className={styles.location}>
          <MapPin color="#8047F8" size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <CartButton />
      </div>
    </header>
  )
}
