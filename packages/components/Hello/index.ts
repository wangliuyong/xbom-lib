import Hello from './index.vue'

Hello.install = function(Vue: any) {
    Vue.component(Hello.name, Hello)
}

console.log(Hello);


export default Hello