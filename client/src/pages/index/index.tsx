import React from "react";
import  { View, Text,Navigator  } from "@tarojs/components";
import "./index.scss";

export default function Index() {
  return (
    <View className="home">
      <View className="items">
        <Navigator
          className="item"
          url="/pages/robot/index"
        >
          Robot
        </Navigator>
        <Navigator
          className="item"
          url="/pages/counter/index"
        >
          Counter
        </Navigator>
      </View>
    </View>
  );
}
