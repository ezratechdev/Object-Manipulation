const ResponseFunction = require("./ResponseFunction");

/**
 * I will simulate res.json() using console.log()
 */


console.log({
    ...ResponseFunction({
        message:'Hello world',
        status:200,
        result:1,
    })
});

// Also similar with
console.log(
    ResponseFunction({
        message:'Hello world',
        status:200,
        result:1,
    })
);