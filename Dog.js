var chalk = require('chalk');
function Dog(name){
    this.name = name;
    this.stomach = [];
}

Dog.prototype.eat = function(Cat){
    this.stomach.push(Cat);
}
Dog.prototype.sayHi = function(){
    console.log('Hi, im dog, my name is' + chalk.blue(this.name));
}
module.exports = Dog;
