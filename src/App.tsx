import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'
import Footer from './components/Footer'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss></GlobalCss>
      <div className="container">
        <Header></Header>
      </div>
      <Rotas></Rotas>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
