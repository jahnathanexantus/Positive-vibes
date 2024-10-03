import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Navbar from './components/Navbar'
import Service from './pages/sevices/Services'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='/services' element={<Service />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
