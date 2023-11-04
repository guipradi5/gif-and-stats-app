const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/constants.scss"; 
        @import "@/assets/fonts/fonts.scss";`,
      },
    },
  },
});
