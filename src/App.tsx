import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import { CssGlobal } from './styles'
import Rotas from './routes'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssGlobal />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
