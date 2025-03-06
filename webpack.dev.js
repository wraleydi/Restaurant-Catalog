const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); // Import analyzer plugin

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 9000,
    static: path.resolve(__dirname, "dist"),
    watchFiles: ["index.html", "src**/*/"],
    open: true,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerPort: "auto",
      openAnalyzer: true,
    }),
  ],
});
