import { name } from "./package.json";

module.exports = {
    banner: true,
    output: {
      extractCSS: true,
      format: 'esm',
      fileName: '[name].js'
    },
    input: ['./src/index.ts', './src/css/style.scss'],
    plugins: {
      vue: true,
    }
};