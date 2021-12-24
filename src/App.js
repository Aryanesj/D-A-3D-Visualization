import React, { useState } from 'react'
import Navbar from './components/Navbar.js'
import GlobalStyle from './globalStyle.js'
import Heroic from './components/Heroic.js'
import { SliderData } from './data/SliderData.js'
import Dropdown from './components/Dropdown.js'

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
      <Heroic slides={SliderData} />
    </>
  );
}

export default App;
