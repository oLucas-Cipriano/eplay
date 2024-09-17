import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Footer from './components/Footer'
import Categories from './pages/Categories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/categories" element={<Categories></Categories>}></Route>
  </Routes>
)

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
