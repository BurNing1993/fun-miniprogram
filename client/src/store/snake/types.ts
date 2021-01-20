export type DIRECTION = "UP" | "DOWN" | "LEFT" | "RIGHT";
//  constants
export const MOVE = 'MOVE'
export const RESTART = 'RESTART'

// state
export interface SnakeState {
  score: number; //分数
  max: number; //最高分
  level: number; //等级
  alive: boolean; // 存活
  foodPos: number[]; // 食物位置
  snake: number[][]; //蛇
}
// action
interface MoveAction {
  type: typeof MOVE;
  payload:DIRECTION;
}
// action
interface RestartAction {
  type: typeof RESTART;
}

export type SnakeActionTypes = MoveAction|RestartAction;
