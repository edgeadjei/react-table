const {join, resolve} = require("path");

module.exports = {
  mode: "development",
  entry: {
    table: "./src/table/table.component.jsx"
  },
  output: {
    path: join(__dirname,"dist"),
    filename: "[name].js",
    library: "@edgesyntax/react-table",
    libraryTarget: "umd"
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        type: "javascript/auto",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  externals: {
    react: "react",
    "react-dom": "react-dom"
  }
};
