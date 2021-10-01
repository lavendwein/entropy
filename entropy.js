let fs = require('fs');
let arg = process.argv;
let inputData;
let alph = new Array();
let i = 0, entropy = 0, sum = 0;

inputData = fs.readFileSync(arg[2]);
inputData = inputData.toString();

for (i = 0; i < inputData.length; i++){
	alph[inputData.charAt(i)] = 0;
}

for (i = 0; i < inputData.length; i++){
	alph[inputData.charAt(i)]++;	
} 

for (i in alph){
	alph[i] /= inputData.length;
	sum++;
}
	
if (sum > 1){
	for (j in alph){
		entropy += (-1) * alph[j] * Math.log(alph[j]) / Math.log(sum);
	}
}else{
	entropy = 0;
}	

console.log(parseFloat(entropy.toFixed(8)))