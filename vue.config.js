const {defineConfig} = require('@vue/cli-service');
const {VantResolver} = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()], // vant 按需引入
      }),
    ],
  },
  devServer: {
    port: '8080',
    open: false,//配置自动启动浏览器
    proxy: {
      '/api': {
        target: "http://192.168.16.182:18001",   //开发
        changeOrigin: true,//在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      }
    }
  }
})
