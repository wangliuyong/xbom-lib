import './styles/index.scss'
import Hello from './components/Hello';

const components = {
  Hello,
};

const install = function (Vue: any) {
  Object.values(components).forEach((component) => {
    console.log(component);
    
    Vue.component(component.name, component);
  });
};

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

export default { install };