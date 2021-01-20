import React, { useEffect, useState } from "react";
import { View, Image, Button, Navigator, Text } from "@tarojs/components";
import "./index.scss";
import upArrow from "../../assets/images/up.svg";
import { RootState } from "../../store";
import { move, restart } from "../../store/snake/actions";
import { DIRECTION } from "../../store/snake/types";
import { useDispatch, useSelector } from "react-redux";

let timer;
const Snake: React.FC = () => {
  //TODO level
  const dispatch = useDispatch();
  const foodPos = useSelector<RootState>(
    state => state.snake.foodPos
  ) as number[];
  const snake = useSelector<RootState>(
    state => state.snake.snake
  ) as number[][];
  const score = useSelector<RootState>(state => state.snake.score) as number;
  const max = useSelector<RootState>(state => state.snake.max) as number;
  const level = useSelector<RootState>(state => state.snake.level) as number;
  const alive = useSelector<RootState>(state => state.snake.alive) as boolean;
  const [currentDirection, setCurrentDirection] = useState<DIRECTION | null>(
    null
  );
  useEffect(() => {
    if (!alive) {
      clearTimeout(timer);
      console.log("Fail");
      return;
    }
    if (timer && currentDirection) {
      clearTimeout(timer);
      dispatch(move(currentDirection));
    }
    moveSnake();
  }, [currentDirection, alive]);

  const moveSnake = () => {
    if (currentDirection) {
      timer = setTimeout(() => {
        dispatch(move(currentDirection));
        moveSnake();
      }, 500 - level * 10);
    }
  };

  const setDirection = (direction: DIRECTION) => {
    if (!currentDirection) {
      setCurrentDirection("RIGHT");
    }
    if (direction === currentDirection) {
      return;
    }
    // 禁止掉头
    if (direction === "UP" && currentDirection === "DOWN") {
      return;
    }
    if (direction === "DOWN" && currentDirection === "UP") {
      return;
    }
    if (direction === "LEFT" && currentDirection === "RIGHT") {
      return;
    }
    if (direction === "RIGHT" && currentDirection === "LEFT") {
      return;
    }
    setCurrentDirection(direction);
  };

  return (
    <View id="game">
      <View id="stage">
        <View id="snake">
          {snake.map(item =>
            React.createElement(View, {
              style: {
                position: "absolute",
                left: item[0] + "rpx",
                top: item[1] + "rpx"
              }
            })
          )}
        </View>
        <View
          id="food"
          style={{
            position: "absolute",
            left: foodPos[0] + "rpx",
            top: foodPos[1] + "rpx"
          }}
        >
          <View></View>
          <View></View>
          <View></View>
          <View></View>
        </View>
      </View>
      <View id="panel">
        <View id="score">Score:{score}</View>
        <View id="max">Max:{max}</View>
        <View id="level">Level:{level}</View>
      </View>
      <View id="control">
        <View className="btn" id="up" onClick={() => setDirection("UP")}>
          <Image src={upArrow} />
        </View>
        <View className="btn" id="down" onClick={() => setDirection("DOWN")}>
          <Image src={upArrow} />
        </View>
        <View className="btn" id="left" onClick={() => setDirection("LEFT")}>
          <Image src={upArrow} />
        </View>
        <View className="btn" id="right" onClick={() => setDirection("RIGHT")}>
          <Image src={upArrow} />
        </View>
      </View>
      {!alive && (
        <View id="alert">
          <View className="title">
            <View>Score:{score}</View>
            {score >= max && <View>New Record!</View>}
          </View>
          <View className="content">
            <Button
              id="restart"
              className="btn-max-w"
              type="primary"
              onClick={() => dispatch(restart())}
            >
              RESTART
            </Button>
            <Navigator id="back" url="/pages/index/index">
              <Text>Back</Text>
            </Navigator>
          </View>
        </View>
      )}
    </View>
  );
};
export default Snake;
