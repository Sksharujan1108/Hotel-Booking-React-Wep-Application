import React from 'react'
import Navbar from './component/navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import Footer from './component/footer'

const App = () => {

  const isOwnerPath =useLocation().pathname.includes('owner')

  return (
    <div>
      {!isOwnerPath &&  <Navbar />}
      
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      {/*  */}
      <div>
        {/* Placeholder for other components like Footer, etc. */}
        <Footer />
      </div>
    </div>
  )
}

export default App
