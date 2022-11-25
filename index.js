function receivesAFunction(callback) {
    return callback();
}

receivesAFunction(function () { return "I am calling back a function. I really hope this works. LOL."});
// why arent these functions printing to the console?
function returnsANamedFunction() {
    return function soupOrSalad() {
       return "Would you like soup, or salad with that?";
    };
    
}
// This is not printing to the console now? UGH
function returnsAnAnonymousFunction() {
    return function () {
        return "Will this text print to the console?";
    };
    
}
console.log(returnsAnAnonymousFunction());