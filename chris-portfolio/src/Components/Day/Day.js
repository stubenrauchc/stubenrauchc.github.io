import React, { useState, useEffect } from "react";
import Navigator from "../navigation/Navigator";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import './day.css';

export default function Day(props) {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const state = useSelector((state) => state);

  useEffect(() => {
    const mealplan = state.recipes.recipes;
    setPosts(mealplan);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  function addUpdateMealSelection(user, time, day, meal) {
    let match = false;
    if (props.mealselection.length === 0) {
       return props.newMealSelection(
        user,
        time,
        day,
        meal 
      );
    } 
    // eslint-disable-next-line array-callback-return
    props.mealselection.map((item) => {
      if (
        item.dayofweek === day &&
        item.category === time
      ) {
        match = true;
        return props.changeMealSelection(
          item.mealplanid,
          user,
          time,
          day,
          meal 
        );
      }});  
      if(!match) {
         return props.newMealSelection(
          user,
          time,
          day,
          meal 
        );
         }
  }

  const mealItems = posts.map((item, index) => {
    return (
      <li key={index} id="pantry-list">
        {item.title}
        <Link to="/weeklyplanner">
          <FaPlusCircle id='plus-button' onClick={() => addUpdateMealSelection(state.user.id,  location.state.meal, location.state.day, item.title)} />
        </Link>
      </li>
    );
  });

  return (
    <>
      <Navigator />
      <h3>
        Available {location.state.meal} item for {location.state.day} is:
      </h3>
      <ul id="pantry-items">{mealItems}</ul>
    </>
  );
}
