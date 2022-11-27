

import * as actionTypes from "./actionTypes";

export const PurchasedItems = (
  state = {
    purchaseditems: []
  },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_PURCHASED_ITEMS:
    return {
      ...state,
      purchaseditems: [...state.purchaseditems, action.payload]
    }
    case actionTypes.UPDATE_PURCHASED_ITEMS:
      return { ...state, purchaseditems: action.payload };
    case actionTypes.DELETE_PURCHASED_ITEMS:
      return { ...state, purchaseditems: state.purchaseditems.filter(item => item !== action.payload) };
    default:
      return state;
  }
};
// selectedIngredients.filter((item) => item !== ingredientName)