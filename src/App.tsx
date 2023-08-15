import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import './global.css'
import { CartProvider } from './contexts/cartContext'

export function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CartProvider>
  )
}
