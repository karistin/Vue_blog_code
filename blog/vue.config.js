module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    overlay: false
  },
  configureWebpack: {
    module: {
      rules: [
        {
          // test: /\.md$/,
          // loader: "raw-loader" // npm install -D raw-loader
          test: /\.md$/,
          loader: "frontmatter-markdown-loader"
        }
      ]
    }
  }
};
