import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import SearchBar from './searchBar'

export default function Navbar() {

  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'><h1>Gangstaqueen's Food Recipes</h1></Link>
        <SearchBar />
        <Link to='/create'>Create Recipe</Link>
      </nav>
    </div>
  )
}
