import { SnakeState, SnakeActionTypes, MOVE, RESTART } from "./types";
import Taro from '@tarojs/taro';

const STEP = 20;
const X_MAX = 600 - STEP;
const Y_MAX = 800 - STEP;
const LOCAL_MAX = 'max';

function random(num: number): number {
  return parseInt(String(Math.random() * num / STEP), 10) * STEP
}

function randomPos(): number[] {
  return [random(X_MAX), random(Y_MAX)]
}

const maxScore = () => {
  try {
    var value = Taro.getStorageSync(LOCAL_MAX)
    console.log(value);
    if (value) {
      return Number(value)
    }
    return 0
  } catch (e) {
    console.error(e);

    return 0
  }
}

const INITIAL_STATE: SnakeState = {
  score: 0,
  max: maxScore(),
  level: 1,
  alive: true,
  foodPos: randomPos(),
  snake: [[300, 400]],
};

function eatFood({ snake, foodPos }: SnakeState): boolean {
  const [X, Y] = snake[0]
  const [fX, fY] = foodPos
  return X === fX && Y === fY
}
function live({ snake }: SnakeState): boolean {
  const [X, Y] = snake[0]
  const body = snake.slice(1)
  return X >= 0 && X <= X_MAX && Y >= 0 && Y <= Y_MAX && !body.some(item => item[0] === X && item[1] === Y)
}

// max 存服务器
export default function counter(
  state = INITIAL_STATE,
  action: SnakeActionTypes
): SnakeState {
  switch (action.type) {
    case MOVE:
      let snake = state.snake
      switch (action.payload) {
        case "UP":
          {
            let [X, Y] = state.snake[0] //蛇头
            const body = state.snake.slice(0, state.snake.length - 1)
            snake = [[X, Y - STEP], ...body]
            break
          }
        case "DOWN":
          {
            let [X, Y] = state.snake[0] //蛇头
            const body = state.snake.slice(0, state.snake.length - 1)
            snake = [[X, Y + STEP], ...body]
            break
          }
        case "LEFT":
          {
            let [X, Y] = state.snake[0] //蛇头
            const body = state.snake.slice(0, state.snake.length - 1)
            snake = [[X - STEP, Y], ...body]
            break
          }
        case "RIGHT":
          {
            let [X, Y] = state.snake[0] //蛇头
            const body = state.snake.slice(0, state.snake.length - 1)
            snake = [[X + STEP, Y], ...body]
            break
          }
        default:
          break;
      }
      const currentState = { ...state, snake }
      const alive = live(currentState)
      const eat = eatFood(currentState)
      if (eat) {
        let last = snake[snake.length - 1]
        snake.push(last)
        const score = state.score + 1
        let level = state.level
        if (score % (state.level * 10) === 0) {
          level += 1
        }
        return { ...currentState, score, alive, level, foodPos: randomPos() }
      }
      if (!alive) {
        if (state.score > state.max) {
          Taro.setStorage({
            key: LOCAL_MAX,
            data: state.score
          })
          return { ...currentState, alive, max: state.score }
        }
      }
      return { ...currentState, alive }
    case RESTART:
      return { ...INITIAL_STATE,max:maxScore()};
    default:
      return state;
  }
}
