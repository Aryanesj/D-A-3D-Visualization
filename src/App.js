import React from 'react'
import Navbar from './components/Navbar.js'
import GlobalStyle from './globalStyle.js'
import Heroic from './components/Heroic.js'
import { SliderData } from './data/SliderData.js'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Heroic slides={SliderData} />
    </>
  );
}

export default App;
