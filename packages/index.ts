import './styles/index.scss'
import Hello from './components/Hello/index.vue';

const components = {
  Hello,
};

const install = function (Vue: any) {
  Object.values(components).forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { default as Hello } from './components/Hello/index.vue';

export default { install };