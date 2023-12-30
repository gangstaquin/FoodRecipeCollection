import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchBar.css'

export default function SearchBar() {

    const [term, setTerm] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()


        if (term.trim() === '') {
          return  navigate(`/`)
        }

        navigate(`/search/${term}`)
    }

  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'> Search </label>
            <input 
            id='search'
            type="text" 
            onChange={(e) => setTerm(e.target.value)}
            />
      </form>
    </div>
  )
}
