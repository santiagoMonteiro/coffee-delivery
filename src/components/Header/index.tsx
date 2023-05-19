import styles from './styles.module.scss'
import logo from '../../assets/logo.svg'
import { MapPin } from '@phosphor-icons/react'
import { CartButton } from '../CartButton'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className={styles.container}>
      <NavLink to="/coffee-delivery" title="home">
        <img src={logo} alt="" />
      </NavLink>
      <div className={styles.generalInfo}>
        <div className={styles.location}>
          <MapPin color="#8047F8" size={22} weight="fill" />
          <span>Manaus, AM</span>
        </div>

        <CartButton />
      </div>
    </header>
  )
}
