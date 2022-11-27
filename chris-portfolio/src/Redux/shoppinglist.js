import * as actionTypes from "./actionTypes";

export const ShoppingList = (
  state = {
    shoppinglist: []
  },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_SHOPPINGLIST:
      return { ...state, shoppinglist: action.payload };
    case actionTypes.UPDATE_SHOPPINGLIST:
      return { ...state, shoppinglist: action.payload };
    case actionTypes.DELETE_SHOPPINGLIST:
      return { ...state, shoppinglist: state.shoppinglist.filter(item => item.ingredientName !== action.payload) };
    default:
      return state;
  }
};
