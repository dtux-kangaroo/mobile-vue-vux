// const utils = require('./common')
const path = require('path')
// const webpack = require('webpack')
// const config = utils.conf
// const merge = require('webpack-merge')
// const baseWebpackConfig = require('./webpack.base.conf')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// const portfinder = require('portfinder')

// const config = utils.conf
// const vueLoaderConfig = require('./vue.loader.conf')
// const vuxLoader = require('vux-loader')

// function resolve (dir) {
//   return path.join(__dirname, '..', dir)
// }


module.exports = (context) => {
  const {webpack} = context;
  return {
    webpack:{
      entry:{},
      output:{},
      module:{
        rules:[]
      },
      plugins:[
        // new webpack.DefinePlugin({
        //   'process.env': JSON.stringify("development")
        // }),
        new CopyWebpackPlugin([
          { from: path.resolve(__dirname,'public/config'), to:'config' },
          { from: path.resolve(__dirname,'public/assets'), to:'assets' },
          { from: path.resolve(__dirname,'public/mock'), to:'mock' }
        ]),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        // new webpack.NoEmitOnErrorsPlugin(),
        // new HtmlWebpackPlugin({
        //   filename: 'index.html',
        //   template: path.resolve(__dirname, '../src/index.ejs'),
        //   inject: true,
        //   assets: {
        //     config_js: '/static/conf/conf.dev.js'
        //   }
        // }),
      ],
      resolve:{
        // extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': path.resolve(__dirname,'src'),
        }
      },
      externals:{
        'FRONT_CONF': 'FRONT_CONF'
      }
    }
  }
}

