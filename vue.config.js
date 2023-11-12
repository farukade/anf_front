const { defineConfig } = require("@vue/cli-service");
require("dotenv").config();

module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: process.env.BASE_URL,
	assetsDir: process.env.BASE_URL,
});
