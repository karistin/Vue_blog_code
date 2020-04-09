const Mode = require("frontmatter-markdown-loader/mode");
module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    overlay: false
  },
  // configureWebpack: {
  //   module: {
  //     rules: [
  //       {
  //         // test: /\.md$/,
  //         // loader: "raw-loader" // npm install -D raw-loader
  //         test: /\.md$/,
  //         loader: "frontmatter-markdown-loader"
  //       }
  //     ]
  //   }
  // }
  chainWebpack: config => {
    config.module
      .rule("markdown")
      .test(/\.md$/)
      .use("frontmatter-markdown-loader")
      .loader("frontmatter-markdown-loader")
      .tap(options => {
        return {
          mode: [Mode.VUE_COMPONENT]
        };
      });
  }
};
