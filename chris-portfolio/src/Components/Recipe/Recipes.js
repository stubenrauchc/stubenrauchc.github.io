import React from "react";
import SavedRecipes from "./SavedRecipes";
import Navigator from "../navigation/Navigator";


import "./recipe.css";
export default function Recipes(props) {
  
  return (
    <div>
      <Navigator />
      <h3>Recipe Collection</h3>
      <div id="render-saved-recipes">
        <SavedRecipes
          recipes={props.recipes}
          deleteRecipe={props.deleteRecipe}
          updatedRecipe={props.updatedRecipe}
          token={props.token}
          recipesLoading={props.recipesLoading}
        />
      </div>
    </div>
  );
}
