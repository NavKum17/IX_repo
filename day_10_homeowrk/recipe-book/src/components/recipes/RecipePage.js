import React, { useState, useEffect } from "react";
import RecipeInput from "./RecipeInput";
import RecipeDisplay from "./RecipeDisplay";
import { Recipe } from "../../models/Recipe";
import recipeService from "../../services/RecipesService";

export default function RecipePage() {
    const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!recipes.length) {
      onInitialLoad();
    }
  }, []);

  async function AddRecipe(title, ingredients, instructions) {
    const new_recipe = new Recipe(null, title, ingredients, instructions);

    await recipeService.AddRecipe(new_recipe);

    setRecipes([...recipes, new_recipe]);
  }

  async function onInitialLoad() {
    const recipes_temp = await recipeService.FetchRecipes();
    setRecipes(recipes_temp);
  }

  // async function EditRecipe(recId) {
  //   recipeService.EditRecipe();
  // }

  async function DeleteRecipe(recId) {
    await recipeService.DeleteRecipe(recId);
    
    setRecipes(recipes.filter((recipe) => recipe.id !== recId))
  }

  return (
    <div>
        <div className="container-fluid bg-dark text-white p-4">
        <h1>Recipe Book</h1>
      </div>

      <RecipeDisplay recipes={recipes} DeleteRecipe={DeleteRecipe}></RecipeDisplay>
      <RecipeInput AddRecipe={AddRecipe}></RecipeInput>

      <div className="container-fluid bg-dark text-white p-4">
        <h4>Have fun using the recipe book</h4>
        <h5>Made by Naveen Kumanan as homework for I_Experience.</h5>
      </div>
    </div>
  )
}
