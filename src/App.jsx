import { useState } from 'react'
import './App.css'
import CustomCursor from './components/CustomCursor'

import Portfolio from './pages/Portfolio'

function App() {
  return (
    <div className="curosr-none">
      <CustomCursor />
      <Portfolio />
    </div>
  )
}

export default App;
