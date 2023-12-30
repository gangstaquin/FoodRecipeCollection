import React from 'react'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './create.css'
import { useFetch } from '../../hooks/useFetch'

export default function Create() {

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])

  const {postData, data, error} = useFetch('http://localhost:3000/recipes', 'POST')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDeafult()
    
    postData({title, ingredients, method,cookingTime: cookingTime + 'minutes'})
  }

  const handleAdd = (e) => {
    e.preventDeafult()

    if(newIngredient && !ingredients.includes(newIngredient)) {
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    setNewIngredient('')
  }

  useEffect(() => {

    if(data){
      navigate('/')
    }

  }, [data])

  return (
    <div className='create'>
      <h2 className='page-title'>Add a new recipe</h2>

      <form onSubmit={handleSubmit}>

        <label>
          <span>Recipe Title :</span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span> Recipe Ingredients: </span>
          <div className="ingredients">
            <input 
            type="text" 
            onChange={(e) => setNewIngredient(e.target.value)}
            value={newIngredient}
            />
            <button onClick={handleAdd} className="btn">Add</button>
          </div>
        </label>
        <p>Current Ingredients : {ingredients.map(i => <em key={i}>{i}, </em>)}</p>

        <label>
          <span>Recipe Method :</span>
            <textarea 
              onChange={(e) => setMethod(e.target.value)}
              value={method}
              required
            />
        </label>

        <label>
          <span>Coking Time(m) :</span>
          <input
            type='number'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

      <button className="btn">Submit</button>
      </form>
    </div>
  )
}