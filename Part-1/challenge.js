// Good Luck! You got this 💪🏾
// Write your code here.
var check=500;


if (check<=300){
	console.log(`the bill was ${check},the tip was ${0.15*check} and total was ${(0.15*check)+check} `);
}
else if (check>300){
	console.log(`the bill was ${check},the tip was ${0.20*check} and total was ${(0.20*check)+check} `);
}
else{
	console.log("no tip")
}