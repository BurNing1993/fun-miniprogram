import { requirePlugin } from "@tarojs/taro";
import React, { useEffect } from "react";
const plugin = requirePlugin("chatbot");

const Robot = () => {
  useEffect(() => {
    plugin.init({
      appid: "P5Ot9PHJDechCYqDFAW1AiK6OtG3Ja",
      openid: "oB6jg6ENstneouhXefbujwJl7v2n", // 小程序的openid，必填项
      userHeader: "", // 用户头像
      userName: "", // 用户昵称
      anonymous: false, // 是否允许匿名用户登录，版本1.2.9后生效, 默认为false，设为ture时，未传递userName、userHeader两个字段时将弹出登录框
      success: () => {},
      fail: error => {}
    });
  }, []);
  return <>Robot</>;
};
export default Robot;
