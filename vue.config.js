const path = require('path')
module.exports = {
	devServer: {
	  // open: process.platform === 'darwin',
	  host: 'localhost', // can be overwritten by process.env.HOST
   	port: 8080,
	  https: false,
	  hotOnly: false,
	  proxy: {
	  	'/api' : {
			target: 'http://192.168.0.78:8791',
					// secure: false,  
	        changeOrigin: true,
	        pathRewrite: {
	          '^/api': '/'
	        }
				}

	  } // 设置代理
	 },
	 lintOnSave: false,
	 	css: {
	  // 是否使用css分离插件 ExtractTextPlugin
		extract: true,
	  // 开启 CSS source maps?
	  sourceMap: false,
	  // css预设器配置项
	  loaderOptions: {},
	  // 启用 CSS modules for all css / pre-processor files.
	  modules: false
	 },
	 // autoOpenBrowser: true,

}
