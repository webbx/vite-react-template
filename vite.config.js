const path = require('path');

module.exports = {
	jsx: 'react',
	// 定义别名
	alias: {
		// 路径映射必须以/开头和结尾
		"/components/": path.resolve(__dirname, "src/components"),
		"/css/": path.resolve(__dirname, "src/assets/css"),
	},

	plugins: [require('vite-plugin-react'), require('autoprefixer'),]
}
