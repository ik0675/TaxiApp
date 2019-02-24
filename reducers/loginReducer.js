import * as types from "../actions/types";

const initalState = {
  user: "",
  chatPerson: "?"
};

export const loginReducer = (state = initalState, action) => {
  console.log("ACTION is ", action);
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        user: action.user
      };
    case types.UPDATE:
      return {
        ...state,
        chatPerson: action.chatPerson
      };
    default:
      return state;
  }
};
