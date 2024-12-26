import { useState } from 'react'
import Routing from './Routes/Routing'
import { Navbar } from './Components/Navbar/Navbar'
import { Footer } from './Components/Footer/Footer'
import './App.css'

function App() {
  

  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex-grow overflow-auto'>
          <Routing />
        </div>
        <Footer />
    </div>
  )
}

export default App
