import {
  compose,
  applyMiddleware,
  combineReducers,
  legacy_createStore,
} from "redux";

import { thunk } from "redux-thunk";
import { Product } from "./Product";
import { UserReducer } from "./User";


let combine = combineReducers({
    items:Product,
    User:UserReducer,
})


// export const store =createStore(reducer)

const composeEnhancers =
  typeof window === "object" && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    ? window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({})
    : compose;
export const store = legacy_createStore(combine, composeEnhancers(applyMiddleware(thunk)));
