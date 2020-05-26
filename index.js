import License from './components/license.vue'

export default {
  install(Vue, options = {}) {
    Vue.component(Licnese.name, License)
  }
}