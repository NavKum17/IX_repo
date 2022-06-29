import React from "react";
// import { Recipe } from "../models/Recipe";

export default function RecipeDisplay(props) {
  return (
    <div className="text-center m-3">
        <h2>Recipes</h2>
        <div className="card card-body bg-warning">
        
        <div className="container-fluid d-flex flex-wrap">
            {props.recipes.map((recipe) =>
                <div key={recipe.id} className="card bg-success m-2 px-2 text-white">
                  <p>{recipe.title}</p>
                  <p>{recipe.ingredients}</p>
                  <p>{recipe.instructions}</p>
                  <div className="container-s m-1">
                    {/* <button onClick={(e) => props.EditRecipe(recipe.title)} className="btn btn-primary container-fluid m-1" type="button">Edit</button> */}
                    <button onClick={(e) => props.DeleteRecipe(recipe.id)} className="btn btn-danger container-fluid m-1">Delete</button>
                  </div>
                </div>
            )}
        </div>
    </div>
    </div>
    
  );
}
