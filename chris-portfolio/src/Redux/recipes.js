import * as actionTypes from "./actionTypes";

export const Recipes = (state = {
  isLoading:true,
  recipes: [] }, action) => {

  switch (action.type) {
    case actionTypes.ADD_RECIPE:
      return { ...state, isLoading:false,recipes: action.payload };
    case actionTypes.RECIPES_LOADING:
      return{ ...state, isLoading:true };
    case actionTypes.UPDATE_RECIPE:
      return {...state, isLoading:false, recipes: action.payload };

    case actionTypes.DELETE_RECIPE:
      return { ...state, isLoading:false, recipes: action.payload };
    default:
      return state;
  }
};
