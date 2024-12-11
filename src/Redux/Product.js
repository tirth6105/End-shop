import {
  ADD_CART,
  ADD_QTY,
  REMOVE_CART,
  REMOVE_QTY,
  SHOW_PRODUCT,
} from "./ActionType";


let initialState = { hotproduct: [], cart: [] };

export const Product = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_PRODUCT:
      return {
        ...state,
        product: payload,
      };

    case ADD_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };

    case REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== payload),
      };

    case ADD_QTY:
      return {
        ...state,
        cart: state.cart.map((el) => {
          if (el.id === payload.id) {
            return { ...el, qty: payload.qty };
          }
          return el;
        }),
      };

    case REMOVE_QTY:
      return {
        ...state,
        cart: state.cart.map((el) => {
          if (el.id === payload.id ) {
            return { ...el, qty: payload.qty };
          }
          return el;
        }),
      };

    default:
      return state;
  }
};
