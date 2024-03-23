function concertPassPromise(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const ranNum = Math.random();
            if(ranNum > 0.5){
                
                resolve("Concert Pass")
            }else{
                reject("Consert Fail")
            }
        },3000)
    })
}

concertPassPromise()
.then((messgae)=>{
    console.log(messgae);
})
.catch((messgae)=>{
    console.log(messgae);
})