import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { registerMicroApps, setDefaultMountApp, start, runAfterFirstMounted } from 'qiankun'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')



registerMicroApps([
  // {
  //   name: 'react app', // app name registered
  //   entry: '//localhost:5173',
  //   container: '#subContainer',
  //   activeRule: '/#/micro',
  // },
  {
    name: 'vue3-app-ts',
    // entry: { scripts: ['//localhost:8080/src/main.ts'] },
    entry: '//localhost:8080/src/main.ts',
    container: '#subContainer',
    activeRule: '#/micro',
    props: {
    }
  },
  {
    name: 'express-app',
    entry: '//localhost:3006',
    container: '#subContainer',
    activeRule: '#/views',
  },
],{
  // qiankun 生命周期钩子 - 加载前
  beforeLoad: (app) => {
    console.log('before load', app);
  },
  // qiankun 生命周期钩子 - 挂载后
  afterMount: (app) => {
    console.log('before mount', app);
  },
  // qiankun 生命周期钩子 - 卸载后
  afterUnmount: (app) => {
    console.log('after unload', app);
  },
})
// 设置默认进入的子应用
// setDefaultMountApp("/micro/vueApp")

start()

// 第一个子应用加载完毕回调
runAfterFirstMounted(() => {
  console.log("[MainApp] first app mounted");
})
