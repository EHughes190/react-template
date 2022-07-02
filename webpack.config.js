const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
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
        use: {
          //transpile with babel loader
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        exclude: /node_modules/,
      },
      {
        //for typescript files, use ts-loader
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
      //using scss but could remove sass-loader and change to /\.css$/
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  //bundles our js from index.js into one file in the dist directory
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
