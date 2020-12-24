import { SET_OPEN_ID, UserState, UserActionTypes } from "./types";

const INITIAL_STATE: UserState = {
  openId: '',
};

export default function reducer(
  state = INITIAL_STATE,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case SET_OPEN_ID:
      return {
        ...state,
        openId: action.payload
      }
    default:
      return state
  }
}
