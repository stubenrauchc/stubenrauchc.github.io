import * as actionTypes from "./actionTypes";

export const Mealplan = (
  state = {
    mealplan: []
  },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_MEALPLAN:
      return { ...state, mealplan: action.payload };
    case actionTypes.UPDATE_MEALPLAN:
      return { ...state, mealplan: action.payload };
    case actionTypes.DELETE_MEALPLAN:
      return { ...state, mealplan: action.payload };
    default:
      return state;
  }
};
