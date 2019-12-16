const path = require("path");

module.exports = {
  entry: {
    main: "./src/main.js",
    vendor: "./src/validation.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        exclude: /node_modules/,
        use:
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "imgs"
            }
          }
      },
    ]
  }
};
