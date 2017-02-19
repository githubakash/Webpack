module.exports = {

  entry : "./app.js",
  output:{
      filename:"bundle.js"
  },
  watch:true,
  module:{
      preLoaders:[
{
  test :  /\.js$/,
 exclude: /node_modules/,
  loader:'jshint-loader'  
}
      ]

  }

}