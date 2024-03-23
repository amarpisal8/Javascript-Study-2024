const promise = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        const searchBook = false;
        if(searchBook){
            resolve("found")
        }else{
            reject("not found")
        }
    },3000)
});

promise.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
// console.log(promise);