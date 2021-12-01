// The receivesAFunction function should:

// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function?

function firstFunction () {
    console.log("Hello")
}

function receivesAFunction(callback){
    callback ()
}

function returnsANamedFunction() {
   return firstFunction

}

function returnsAnAnonymousFunction() {
    return function () {
        
    }
}

