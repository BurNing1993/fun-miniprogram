import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { Provider } from 'react-redux'
import configStore from './store'
import './app.scss'
import { View } from '@tarojs/components'

const store = configStore()

class App extends Component {
  componentDidMount() {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }
  // this.props.children 是将要会渲染的页面
  render () {
    return (
      <Provider store={store}>
        <View id="app">{this.props.children}</View>
      </Provider>
    )
  }
}

export default App
