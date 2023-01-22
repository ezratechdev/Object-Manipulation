function ResponseFunction(data){
    // data is an input provided to this function
    // A function is composed of three major components
    // 1 . The input provided to the function
    // 2. The operations done to the input
    // 3 . The output / The value of that function
    return {
        // What this function essentially does is return a spread of the object data passed
        /**
         * The spread operator
         * ... Essentially spreads the object data passed 
         * Example : 
         * let ages = [ 1 , 2 , 3 , 4 ]
         * console.log([ ...ages , 5 , 6 ]) // will log [ 1 , 2 , 3 , 4 , 5 , 6]
         */
        ...data,
        time:Date(),
        time_ms:Date.now(),
        // The output of this function will now be a spread of the input passed
        // Time as in a new Date().toString() format and time in milliseconds
    }
    // Why do i use this ? 
    // 1. I may want to pass additional data to all responses sent back to a user
    // 2 . Combined with typescript this enables me to send the same response format for all responses while giving me room for adding more data if needed
}

module.exports = ResponseFunction;