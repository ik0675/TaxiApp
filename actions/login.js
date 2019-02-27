import * as types from "./types";

export const login = (id, pw, navigation, update, clear) => dispatch => {
  fetch("http://localhost:4000/main", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ id, pw })
  })
    .then(res => {
      if (res.status === 500) throw err;
      return res;
    })
    .then(res => res.json())
    .then(res => {
      console.log("RES is ", res);
      dispatch({
        type: types.LOGIN,
        user: res
      });
      update();
      navigation.navigate("SignIn");
    })
    .catch(err => {
      alert("ID or PW is not matching!");
      clear();
      update();
    });
};
