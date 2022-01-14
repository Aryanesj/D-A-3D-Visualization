import React, { useState, useEffect, useLayoutEffect } from 'react'
import Navbar from './components/Navbar.js'
import GlobalStyle from './globalStyle.js'
import Dropdown from './components/Dropdown.js'
import Footer from './components/Footer.js'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages'
import About from './pages/About.js'
import Projects from './pages/Projects.js'
import Contact from './pages/Contact.js'
import Rentals from './pages/Rentals.js'
import Aos from 'aos'
import 'aos/dist/aos.css'
 
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  console.log(location.pathname)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  // данный хук подымает скрол до упора при смене урла
  useLayoutEffect(() => {
    window.scrollTo(0,0)
    
  }, [location.pathname])

  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/rentals' element={<Rentals/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
