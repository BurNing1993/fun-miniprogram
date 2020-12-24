// state
export interface UserState{
  openId:string;
}

// constants
export const SET_OPEN_ID = 'set_open_id';

// action
interface SetOpenIdAction{
  type:typeof SET_OPEN_ID;
  payload:string;
}

export type UserActionTypes = SetOpenIdAction
