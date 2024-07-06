import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/categories" element={<Categories />} /> */}
  </Routes>
)
export default Rotas
