import { LOGIN, SIGNIN } from "./ActionType";

let initialState = {
  UserData: [],
  isLogin: false,
};

export const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNIN:
      return {
        ...state,
        UserData: [state.UserData, payload],
        isLogin: true,
      };

    case LOGIN:
      return {
        ...state,
        UserData: payload,
        isLogin: true,
      };

    default:
      return state;
  }
};
