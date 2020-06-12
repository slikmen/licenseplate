import { name } from "./package.json";

module.exports = {
    banner: true,
    output: {
      extractCSS: true
    },
    input: ['./src/index.ts', './src/css/style.scss'],
    plugins: {
      vue: true,
    }
};