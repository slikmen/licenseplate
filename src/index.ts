import License from '../src/components/license.vue'

const licensePlugin = {
  install(Vue: any) {
    Vue.component('license', License)
  },
};

export default licensePlugin;