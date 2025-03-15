const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 9000,
    static: path.resolve(__dirname, "dist"),
    watchFiles: ["index.html", "src/**/*"],
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

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
  ],
});
