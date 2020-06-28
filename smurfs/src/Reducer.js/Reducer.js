// Initial State & Store
import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../Actions/actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: "",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
