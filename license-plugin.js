import License from './components/license.vue'

function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component(License.name, License);
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

component.install = install