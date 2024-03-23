
function bookSearchPromise (){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			const randomNum = math.random();
			if(randomNum >= 0.5){
				resolve("Book Found")
			}else{
				reject("Book Not Found")
			}
			
		},3000)
	})		//3000sec
}
bookSearchPromise().then(message=>{
	console.log("resolve : " ,message);
})
.catch(error=>{
	console.error("Reject:", error);
});
*/