import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Home from './pages/Home'
import About from './pages/About' 
import Contact from './pages/Contact'
import Cources from './pages/Cources'
import CourseDetails from './pages/CourseDetails'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import {Routes, Route} from 'react-router-dom'



const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cources' element={<Cources />} />
        <Route path='/cources/:id' element={<CourseDetails />} />
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>
        
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App

