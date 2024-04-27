const path = require("path");

module.exports = {
  entry: "./src/index.js", // It could be an object of multiple files (code splitting)
  output: {
    filename: "awesome.js", // default is main.js
    path: path.resolve(__dirname, "dist"),
  },
};
