import Taro from "@tarojs/taro";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, Text, Navigator, Image } from "@tarojs/components";
import robot from "../../assets/images/robot.svg";
import snake from "../../assets/images/snake.svg";
import { getUserInfo } from "../../store/user/actions";
import "./index.scss";

export default function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  return (
    <View className="home">
      <View className="items">
        <Navigator className="item" url="/pages/robot/index">
          <Image src={robot} className="icon" />
          <Text className="name">🤖智能对话机器人🤖</Text>
        </Navigator>
        <Navigator className="item" url="/pages/snake/index">
          <Image src={snake} className="icon" />
          <Text className="name">🐍贪吃蛇🐍</Text>
        </Navigator>
        {/* <Navigator className="item" url="/pages/counter/index">
          <Image src={store} className="icon" />
          <Text className="name">Redux Demo</Text>
        </Navigator> */}
      </View>
    </View>
  );
}
