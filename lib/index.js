"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const license_vue_1 = require("./components/license.vue");
exports.default = {
    install(Vue, options = {}) {
        Vue.component(license_vue_1.default.name, license_vue_1.default);
    }
};
