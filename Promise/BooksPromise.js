function bookSearchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                resolve("Book found");
            } else {
                reject("Book not found");
            }
        }, 3000); // 3 seconds delay
    });
}

// Using the bookSearchPromise function
bookSearchPromise()
    .then(message => {
        console.log("Resolved:", message);
    })
    .catch(message => {
        console.log("Rejected:", message);
    });
