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


var grade=85.9;

if(grade>=90 && grade<=100){
	console.log("you get A")
}
else if (grade>=80 && grade<=89){
	console.log("you get B")
}
else if (grade>=60 && grade<=79){
	console.log("you get c")
}
else if (grade<60){
	console.log("you get fail")
}
else {
	console.log("your grade   surpassed the limits ")
}