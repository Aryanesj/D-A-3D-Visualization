import React, { useState } from 'react'
import Navbar from './components/Navbar.js'
import GlobalStyle from './globalStyle.js'
import Dropdown from './components/Dropdown.js'
import Footer from './components/Footer.js'
import { Routes, Route } from 'react-router-dom'
import Home from './pages'
import About from './pages/About.js'
import Homes from './pages/Homes'
import Contact from './pages/Contact.js'
import Rentals from './pages/Rentals.js'
 
function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/homes' element={<Homes/>} />
          <Route path='/rentals' element={<Rentals/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
