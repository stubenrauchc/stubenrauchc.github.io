import * as actionTypes from "./actionTypes";

export const Ingredient = (
  state = {
    ingredient: []
  },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return { ...state, ingredient: action.payload };
    case actionTypes.UPDATE_INGREDIENT:
      return { ...state, ingredient: [...state.ingredient, action.payload]};
    case actionTypes.DELETE_INGREDIENT:
      return { ...state, ingredient: action.payload };
    default:
      return state;
  }
};
