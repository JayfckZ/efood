import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Restaurante from './Pages/Restaurante'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante" element={<Restaurante />} />
  </Routes>
)
export default Rotas
