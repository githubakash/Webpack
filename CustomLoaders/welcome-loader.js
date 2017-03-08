
module.exports = function(source){

  this.cacheable(); //deterministic
  console.log("I am inside welcome loader");
  return "welcome - " + source;

}

    debugger;