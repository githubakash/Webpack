let path = require('path');

module.exports = {
   context:path.resolve('js'),

  entry : "./app.js",
  output:{
    path:path.resolve('build/js'),
    publicPath:'public/asset/js/',

      filename:"bundle.js"
  },
  devServer:{
    contentBase:'public'
  },
  watch:true,
  module:{
      preLoaders:[
{
  test :  /\.js$/,
 exclude: /node_modules/,
  loader:'jshint-loader'  
}
      ],
      loaders:[
        {
          test: /\.css/,
          exclude:/node_modules/,
          loader:'style-loader!css-loader!autoprefixer-loader'

        },
        {
          test:/\.txt/,
           exclude:/node_modules/,
           loader: 'text-loader!' +  path.resolve('CustomLoaders/welcome-loader')
        }
      ]

      

  },
  resolve:{
    extensions:['','.js','.css']
  }

}