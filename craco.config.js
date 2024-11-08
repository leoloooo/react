const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = {
  //插件
  plugins: [{ plugin: require('craco-less') }],
  //别名
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      assets: path.resolve(__dirname, 'src/assets'),
      common: path.resolve(__dirname, 'src/common'),
      services: path.resolve(__dirname, 'src/services'),
      store: path.resolve(__dirname, 'src/store')
    },
    plugins: [...(process.env.ANALYZE === 'true' ? [new BundleAnalyzerPlugin()] : [])]
  }
};
