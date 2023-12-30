import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './recipes.css'

export default function Recipes() {

  const{ id } = useParams()
  const url = 'http://localhost:3000/recipes/'+id
  const {data :recipe, isLoading, error} = useFetch(url)

  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook. </p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
            <p className='method'>{recipe.method}</p>
          </ul>
        </>
      )}
    </div>
  )
}
