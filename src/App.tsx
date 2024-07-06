import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import { CssGlobal } from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <CssGlobal />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
