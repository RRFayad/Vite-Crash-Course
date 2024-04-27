const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.js", // It could be an object of multiple files (code splitting)
  output: {
    filename: "main.js", // default is main.js
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
