import React from "react";
import "./landingpage.css";
import yellowdot from "../../images/yellowdot.png";
import bluedot from "../../images/bluedot.png";
import greendot from "../../images/greendot.png";
import purpledot from "../../images/purpledot.png";
import orangedot from "../../images/orangedot.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
    
      <ul id="landing-page">
        <li id="li_weekly">
          <img src={yellowdot} alt="large yellow ellipse" />
          <Link to="/weeklyplanner" className="landing-page">Weekly Planner</Link>
        </li>
        <li id="li_saved">
          <img src={orangedot} alt="large orange dot" />
         <Link to='recipes' className="landing-page">Saved Recipes</Link> 
        </li>
        <li id="li_pantry">
          <img src={greendot} alt="large green dot" />
          <Link to='AllRecipes'  className="landing-page">All Recipes</Link>
        </li>
        <li id="li_shopping">
          <img src={bluedot} alt="large blue dot" />
          <Link to='shoppinglist' className="landing-page">Shopping List</Link>
        </li>
        <li id="li_create">
          <img src={purpledot} alt="large purple dot" />
         <Link to='createrecipe' className="landing-page">Create Recipe</Link> 
        </li>
      </ul>
    </div>
  );
}
