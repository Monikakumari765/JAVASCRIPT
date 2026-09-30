// let age = 17;

// let p = new Promise((resolve, reject) => {

//     if (age > 18) {
//         resolve("promise pura kar diya");
//     }
//     else {
//         reject("reject kar diya");
//     }

// });

// p
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// });

// create a function which return promise to add a two number 
function add(a, b) {
    return new Promise((resolve, reject) => {

        if (typeof a !== "number" || typeof b !== "number") {
            reject("Both a and b should be numbers");
        } 
        else {
            resolve(a + b);
        }

    });
}

add(3, "mona")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

    // ,then aur .catch me lagta h promise 
    // hw -- create a function allow to vote which return a promise to allow a person with age > or = 18
    // to vote else not allowed 

    