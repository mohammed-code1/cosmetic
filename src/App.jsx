import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Cart from './Pages/cart/Cart'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
