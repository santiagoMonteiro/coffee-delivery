import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="coffee-delivery" element={<Home />} />
        <Route path="coffee-delivery/checkout" element={<Checkout />} />
        <Route path="coffee-delivery/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
