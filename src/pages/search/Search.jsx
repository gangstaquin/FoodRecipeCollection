import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './search.css'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

export default function Search() {

  // //The query string of the current URL. 
  // const queryString = useLocation().search
  // const queryParams = new URLSearchParams(queryString)
  // const query = queryParams.get('q')
  const {q:query} = useParams()

  const url = 'http://localhost:3000/recipes?q=' + query
  const {error, isLoading, data} = useFetch(url)

  return (
    <div>
      <div>
        <h2 className='page-title'>Recepies Including "{query}"</h2>
        {error && <p className='error'>{error}</p>}
        {isLoading && <p className='loading'>Loading...</p>}
        {data && <RecipeList recipes={data} />}
      </div>
    </div>
  )
}
