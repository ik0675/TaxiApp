import * as types from "./types";

export const update = chatPerson => dispatch => {
  dispatch({
    type: types.UPDATE,
    chatPerson: chatPerson
  });
};
