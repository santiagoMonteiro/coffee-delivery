import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import styles from './styles.module.scss'

export function DefaultLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  )
}
