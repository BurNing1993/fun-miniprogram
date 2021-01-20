import { DIRECTION, MOVE, SnakeActionTypes, RESTART } from "./types";

export function move(payload: DIRECTION): SnakeActionTypes {
  return {
    type: MOVE,
    payload
  }
}

export function restart(): SnakeActionTypes {
  return {
    type: RESTART
  }
}
