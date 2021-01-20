import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { View, Text, Button } from "@tarojs/components";
import { add, minus, asyncAdd } from "../../store/counter/actions";

const Counter:React.FC = () => {
  const counter = useSelector<RootState>(state => state.counter.num);
  const dispatch = useDispatch();
  return (
    <View style={{ textAlign: "center" }}>
      <Text style={{fontSize:'100rpx',color:'blue'}}>{Number(counter)}</Text>
      <Button type="primary" onClick={() => dispatch(add())}>+</Button>
      <Button type="warn" onClick={() => dispatch(minus())}>-</Button>
      <Button onClick={() => dispatch(asyncAdd())}>Async+(2s)</Button>
    </View>
  );
};
export default Counter;
