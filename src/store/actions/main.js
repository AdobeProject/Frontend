import {
  GET_PERSON_REQUEST,
  GET_PERSON_SUCCESS,
  GET_PERSON_FAILURE,
} from "../action-types/main";

import axios from "axios";

export const getUser = () => (dispatch) => {
  dispatch({
    type: GET_PERSON_REQUEST,
  });

  axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
    if (response) {
      dispatch({
        type: GET_PERSON_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: GET_PERSON_FAILURE,
      });
    }
  });
};
