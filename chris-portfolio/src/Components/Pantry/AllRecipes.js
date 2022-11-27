import React from "react";
import Navigator from "../navigation/Navigator";
import RecipeCard from "../Recipe/RecipeCard";
import "./allrecipe.css";

export default function AllRecipes(props) {
  return (
    <>
      <Navigator />
      <h3>All Recipes</h3>
      <div id="render-all-recipes">
        <RecipeCard 
        user={props.user}
        saveRecipe={props.saveRecipe}
        allrecipes={props.allrecipes} 
        token={props.token}
        allRecipesLoading={props.allRecipesLoading}
       />
      </div>
    </>
  );
}
