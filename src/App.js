import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';
const App = () => {
  const [recipes, setRecipes] = useState ([]);
  const [query, setQuery] = useState("chicken");
  const [search, setSearch] = useState('');

  useEffect (  () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=%22${query}%22&app_id=02c4e4a2&app_key=abe5137bb229007c70d3efb5ce2633f4`)
    const data = await response.json();
   setRecipes(data.hits);
   console.log(data.hits)
  }
  
  const updateSearch = e => {
    setSearch(e.target.value)
  }
  
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' text=""></input>
        <button className='search-button' type="submit" value={search} onChange={updateSearch}>Search</button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe=>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
    </div>
  );
};
export default App;