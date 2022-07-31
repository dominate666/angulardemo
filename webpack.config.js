module.exports={
    devServer:{
        port:4300
    },
    module: {
      rules: [
        {
          test: /\.less$/i,
          use: [
            // compiles Less to CSS
            "style-loader",
            "css-loader",
            "less-loader",
          ],
        },
      ],
    }
}
