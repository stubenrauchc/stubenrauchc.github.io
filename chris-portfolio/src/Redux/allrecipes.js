import * as actionTypes from "./actionTypes";

export const AllRecipes = (state = {
  isLoading:true,
  allrecipes: [] }, action) => {

  switch (action.type) {
    case actionTypes.ADD_ALL_RECIPES:
      return { ...state,isLoading:false, allrecipes: action.payload };
      case actionTypes.ALL_RECIPES_LOADING:

        return {...state, isLoading:true };
    case actionTypes.UPDATE_ALL_RECIPE:
      return {
         ...state, isLoading:false,
         allrecipes: action.payload };

    case actionTypes.DELETE_ALL_RECIPE:
      return { ...state, isLoading: false,allrecipes: action.payload };
    default:
      return state;
  }
};
