const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  //bundles our js from index.js into one file in the dist directory
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

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
        test: /.js$/,
        exclude: /node_modules/,

        use: {
          //transpile with babel loader
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
