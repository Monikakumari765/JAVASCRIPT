function allowToVote(age) {
    return new Promise((resolve, reject) => {

        if (age >= 18) {
            resolve("Allowed to vote");
        } else {
            reject("Not allowed to vote");
        }

    });
}

// call 
allowToVote(20)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });