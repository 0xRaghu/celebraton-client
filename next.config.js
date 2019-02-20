module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              modifyVars: {
                "primary-color": "#BA0F58",
                "link-color": "#1DA57A",
                "border-radius-base": "2px"
              },
              javascriptEnabled: true
            }
          }
        ]
        // ...other rules
      }
    ];
    return config;
  }
};

const withLess = require("@zeit/next-less");
module.exports = withLess();
