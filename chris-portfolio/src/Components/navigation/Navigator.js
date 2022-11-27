import React from "react";
import { Button } from "reactstrap";
import "./navigation.css";
import { Link } from "react-router-dom";

function Navigator() {
  return (
    <nav id="navigation_container">
       
      <h1>Meal Prepping Made Easy</h1>
   
      <div id="nav_container">
        
          <Button id="nav_home">
            <Link to="/home">Home</Link>
          </Button>
          <Button id="nav_planner">
            <Link to="/weeklyplanner">Planner</Link>
          </Button>
          <Button id="nav_recipes">
            <Link to="/recipes">My Recipes</Link>
          </Button>
          <Button id="nav_pantry">
            <Link to="/allrecipes">All Recipes</Link>
          </Button>
          <Button id="nav_shopping">
            <Link to="/shoppinglist">Shopping</Link>
          </Button>
          <Button id="nav_createrecipe"><Link to='/createrecipe'>CreateRecipe</Link></Button>
        
      </div>
    </nav>
  );
}

export default Navigator;
