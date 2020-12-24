import Taro from "@tarojs/taro";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { SET_OPEN_ID, UserActionTypes } from "./types";

export function setOpenId(openId: string): UserActionTypes {
  return {
    type: SET_OPEN_ID,
    payload: openId
  }
}

export function getUserInfo(): ThunkAction<void, RootState, unknown, Action<any>> {
  return async dispatch => {
    try {
      const res = await Taro.cloud.callFunction({
        name: 'login',
      })
      // @ts-ignore
      const openId=res.result.openid;
      dispatch(setOpenId(openId))
    } catch (error) {
      console.error(error);
    }
  }
}
