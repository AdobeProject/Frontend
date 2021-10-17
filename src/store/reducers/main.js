import {
  GET_PERSON_REQUEST,
  GET_PERSON_SUCCESS,
  GET_PERSON_FAILURE,
} from "../action-types/main";

const initialState = {
  person: { pending: false, data: null, success: false },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSON_REQUEST:
      return {
        ...initialState,
        person: {
          ...initialState.person,
          pending: true,
        },
      };
    case GET_PERSON_SUCCESS:
      return {
        ...initialState,
        person: {
          ...initialState.person,
          pending: false,
          data: action.payload,
          success: true,
        },
      };
    case GET_PERSON_FAILURE:
      return {
        ...initialState,
        person: {
          ...initialState.person,
          pending: false,
        },
      };

    default:
      return state;
  }
};
export default mainReducer;
