import axios from "axios";
import { ADD_CART, SHOW_PRODUCT, REMOVE_CART, ADD_QTY, REMOVE_QTY, SIGNIN, LOGIN } from "./ActionType";

export const showproduct = () => async (dispatch) => {
  let { data } = await axios.get("https://cornet-1.onrender.com/products");
  return dispatch({
    type: SHOW_PRODUCT,
    payload: data,
  });
};

export const add_cart = (data) => {
  return {
    type: ADD_CART,
    payload: data,
  };
};

export const remove_cart = (id) => {
  return {
    type: REMOVE_CART,
    payload: id,
  };
};

export const add_qty = (data) => {
  return {
    type: ADD_QTY,
    payload: data,
  };
};

export const remove_qty = (data)=>{
  return {
    type: REMOVE_QTY,
    payload :data
  }
}

export const signin = (data) => {
  return {
    type: SIGNIN,
    payload: data,
  };
};

export const login =(data)=>{
  return{
    type: LOGIN,
    payload:data
  }
}