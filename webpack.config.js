const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",

  plugins: [
    //tells webpack to inject our bundled js into html file
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  //transpiling
  module: {
    rules: [
      {
        //all files that end in .js
        test: /.(js|jsx)$/,
        exclude: /node_modules/,

        use: {
          //transpile with babel loader
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              noEmit: false,
            },
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  //bundles our js from index.js into one file in the dist directory
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/dist"),
  },
};
