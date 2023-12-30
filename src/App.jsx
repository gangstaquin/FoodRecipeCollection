import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipes from './pages/recipe/Recipes'

function App() {
  return (
   <div className='App'>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create' element={<Create />}/>
          <Route path='/search/:q' element={<Search />}/>
          <Route path='/recipes/:id' element={<Recipes />}/>
          </Routes>
      </BrowserRouter>

   </div>
  )
}

export default App
