export default {
  pages: [
    "pages/index/index",
    "pages/robot/index",
    "pages/snake/index",
    "pages/counter/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  cloud: true,
  plugins: {
    chatbot: {
      version: "1.2.10",
      provider: "wx8c631f7e9f2465e1"
    },
    WechatSI: {
      version: "0.3.4",
      provider: "wx069ba97219f66d99"
    }
  },
  requiredBackgroundModes: ["audio"],
  // sitemapLocation: "sitemap.json"
};
