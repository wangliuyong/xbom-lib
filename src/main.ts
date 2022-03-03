import { createApp } from 'vue'
import App from './App.vue'
import XbomLib from '../packages'

import Routes from './router'
import 'ant-design-vue/dist/antd.css'

createApp(App).use(Routes).use(XbomLib).mount('#app')
