import { createApp } from 'vue'
import App from './App.vue'
import Routes from './router'
import 'ant-design-vue/dist/antd.css'
import XbomLib from '../packages/index'

import lib from 'xbom-libs'
import 'xbom-libs/dist/style.css'

createApp(App).use(Routes).use(XbomLib).mount('#app')