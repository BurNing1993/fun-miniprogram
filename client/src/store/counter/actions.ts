import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import {
  ADD,
  MINUS,
  CounterActionTypes
} from './types'

export const add = (): CounterActionTypes => {
  return {
    type: ADD
  }
}
export const minus = (): CounterActionTypes => {
  return {
    type: MINUS
  }
}

// 异步的 action
export function asyncAdd () :ThunkAction<void,RootState,unknown,Action<any>>{
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 1000)
  }
}
