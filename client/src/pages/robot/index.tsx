import { View } from "@tarojs/components";
import Taro, { requirePlugin } from "@tarojs/taro";
import React, { useEffect } from "react";
const plugin = requirePlugin("chatbot");

const Robot = () => {
  useEffect(() => {
    plugin.init({
      appid: "X2ouvdz4CaBfqXuKMoaRUR4vQFlALN",
      openid: "oJT3s0CgEME8QVMhc2Nmn6N2f8-Q", // 小程序的openid，必填项
      success: () => {},
      fail: error => {},
      guideList: ["天气","新闻","新冠肺炎新闻", "唱首歌", "讲个笑话", "你是谁"],
      textToSpeech: 1,
      welcome: "您好!",
      background: "rgba(247,251,252,1)",
      guideCardHeight: 40,
      operateCardHeight: 90,
      history: true,
      navHeight: 0,
      robotHeader:
        "https://res.wx.qq.com/mmspraiweb_node/dist/static/miniprogrampageImages/talk/leftHeader.png",
      userHeader:
        "https://res.wx.qq.com/mmspraiweb_node/dist/static/miniprogrampageImages/talk/rightHeader.png",
      userName: "FF",
      anonymous: false,
      hideMovableButton: false
    });
  }, []);
  return (
    <View style={{ height: "100vh" }}>
      <chat />
    </View>
  );
};
export default Robot;
