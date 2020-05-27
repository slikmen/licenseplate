import License from '../src/components/license.vue'

export default {
  install(Vue: any, options: any = {}) {
    Vue.component(License.name, License)
  }
}