import { createApp } from 'vue'
import App from './App.vue'
import Routes from './router'
import 'ant-design-vue/dist/antd.css'
import XbomLib from '../packages/index'

import lib from 'xbom-libs'

createApp(App).use(Routes).use(lib).mount('#app')