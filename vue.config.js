// vue.config.js
module.exports = {
  publicPath: "./",
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `
          @import "src/styles/_breakpoints.scss";
          @import "src/styles/_colors.scss";
          @import "src/styles/_fonts.scss";
          @import "src/styles/_zIndex.scss";
          @import "src/styles/_variables.scss";
          @import "src/styles/site.scss";
        `
      },
    }
  }
}
