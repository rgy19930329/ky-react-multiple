const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom', 'antd'],
  },
  output: {
    path: path.join(__dirname, 'src/static/dll'),
    filename: '[name].dll.js',
    library: '_dll_[name]', // 防止全局变量冲突
  },
  plugins: [
    new webpack.DllPlugin({
      name: '_dll_[name]', // 动态链接库的全局变量名称，需要和 output.library 中保持一致
      path: path.join(__dirname, 'src/static/dll', '[name].manifest.json'),
    }),
  ]
}