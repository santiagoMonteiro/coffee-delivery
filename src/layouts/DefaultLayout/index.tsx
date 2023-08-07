import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import styles from './styles.module.scss'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  )
}
