import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import PaginaRestaurante from './Pages/Restaurante'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<PaginaRestaurante />} />
  </Routes>
)
export default Rotas
