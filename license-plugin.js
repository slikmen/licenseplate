import License from './components/license.vue'

const MyPlugin = {
  install(Vue, options = {}) {
    Vue.component(License.name, License);
  }
};

export default MyPlugin; 