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



var grades = 'C';
            
            switch (grades) {
               case 'A': console.log("excellent")
               break;
            
               case 'B': console.log("excellent")
               break;
            
               case 'C': console.log("okay")
               break;
            
               case 'D': console.log("okay")
               break;

	       case 'E': console.log("work harder")
               break;
            
               case 'F': console.log("failed")
               break;
            
               default: console.log("unknow grade")
            }

   
if(grades==='A' || grades==='B'){
	console.log("excellent");
}
else if (grades==='C' || grades==='D'){
	console.log("okay");
}
else if (grades==='F'){
	console.log("work harder")
}

else if (grades==='E'){
	console.log("failed")
}
else{
	console.log("unknow grades")
}


//ex one
var country='japan';
var pop_japan=87;
var language='japanese';

console.log(pop_japan/2);

var pop_somaliland=6;
if(pop_japan>pop_somaliland){
	console.log("japan have higher population")
}
else if (pop_somaliland>Pop_japan){
	console.log("somaliland have higher population")
}
else{
	console.log("they both have same population")
}


console.log(`my country is ${country} we speak ${language} and our population is ${pop_japan}`)


//ex 2
age=30;

if(age>=0 && age<=10){
	console.log("your in primary school")
}
else if (age>=11 && age<=18){
	console.log("your in secondary school")
}

else if (age>=19 && age<=25){
	console.log("your in university")
}

else if (age>=26){
	console.log("do to work")
}

else{
	console.log("error")
}




//ex 3
var BOf=1999;
var cur_year=2021;
var cur_age=cur_year-BOf;

if (cur_age>=0 && cur_age<=11) {
	console.log("child")
	
}
else if(cur_age>=12 && cur_age<=17){
         console.log("teenager")
}

else if (cur_age>=18){
	console.log("adult")

}

else{
	console.log("error")
}


//ex 4
var uniform='black'

if(uniform==='black' || uniform==="white"){
	console.log("right uniform")
}

else{
	console.log("worng uniform")
}



function greeting(names,ages,location) {
	console.log(`my name is ${names} and my age ${ages}and i live in ${location}`)
}

greeting("siciid",22,"150 street");




function adding(num1,num2){
	console.log(num1+num2)
}

adding(45,10);



function fun_age(age1){
	if(age1>=18){
		console.log("adult")
		
	}
	else if (age1<18){
		console.log("child")
	}
	else{
		console.log("error")
	}

}

fun_age(15)





function fun_check(checks,tips){


if (checks<=300){
	console.log(`the bill was ${checks},the tip was ${tips*checks} and total was ${(tips*checks)+checks} `);
}
else if (checks>300){
	console.log(`the bill was ${checks},the tip was ${tips*checks} and total was ${(tips*checks)+checks} `);
}
else{
	console.log("no tip")
}


}

fun_check(300,0.15);





for (var i=1;i<=16;i++){
    var num=2;
    console.log(num*i)
}

for(var i=0;i<=4;i++){
var name1=["siciid","axmed","cali","ilwad","shayma"];
console.log(name1[i])
}


for (var i=10;i>=0;i--){
	console.log(i)
}


function add_sub(equ,num1,num2) {
	if(equ==="plus"){
		console.log(num1+num2)
	}
	else if (equ=="minus"){
		console.log(num1-num2)
	}
	else if (equ=="mult"){
		console.log(num1*num2)
	}
	else if (equ=="div"){
		console.log(num1/num2)
	}
	else{
		console.log("error")
	}
	
}

add_sub("plus",50,25);
add_sub("minus",50,25);
add_sub("mult",50,25);
add_sub("div",50,25);