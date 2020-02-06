var arr = ["A","B","C","D","e","C","D"];

var obj = {};

arr.forEach((item)=>{
	if(obj.hasOwnProperty(item)){
			obj[item] = obj[item]+1
	}else{
		obj[item] = 1	
	}

})

console.log(obj);
console.log(Object.keys(obj))
for(var key in obj){
	console.log(key);
}
