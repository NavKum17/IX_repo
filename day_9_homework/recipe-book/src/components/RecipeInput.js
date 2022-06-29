import React, { useState } from "react";

export default function RecipeInput(props) {
  const [title, setTitle] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [instructions, setInstructions] = useState("")

  function onSubmit(e) {
    e.preventDefault();

    props.AddRecipe(title, ingredients, instructions)

    setIngredients("")
    setInstructions("")
    setTitle("")
  }
  
  return (
    <form className="m-2" onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label">Recipe Title</label>
        <input className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Ingredients</label>
        <input className="form-control" value={ingredients} onChange={(e)=>setIngredients(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Instructions</label>
        <input className="form-control" value={instructions} onChange={(e)=>setInstructions(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-primary">
        Add Recipe
      </button>
    </form>
  );
}
