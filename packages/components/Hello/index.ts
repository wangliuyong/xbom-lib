import Hello from './index.vue'

Hello.install = function(Vue: any) {
    Vue.component(Hello.name, Hello)
}

export default Hello