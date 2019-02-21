import * as types from "../actions/types";

const initalState = {
  user: ""
};

export const loginReducer = (state = initalState, action) => {
  console.log("ACTION is ", action);
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};
