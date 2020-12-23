import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { View, Text, Button } from "@tarojs/components";
import { add, minus } from "../../store/counter/actions";

const Counter = () => {
  const counter = useSelector<RootState>(state => state.counter.num);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>{Number(counter)}</Text>
      <Button onClick={() => dispatch(add())}>+</Button>
      <Button onClick={() => dispatch(minus())}>-</Button>
    </View>
  );
};
export default Counter;
