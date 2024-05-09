
function addition(){
let Num1 = parseFloat(document.getElementById("Num1").value);

let Num2 = parseFloat(document.getElementById("Num2").value);

let add = Num1 + Num2;

document.getElementById("addResult").innerHTML =`addition of ${Num1} and ${Num2}=` +add;
}
document.write("<br>");

function substraction(){
let Num3 = parseFloat(document.getElementById("Num3").value);

let Num4 = parseFloat(document.getElementById("Num4").value);
	
let sub = Num3 - Num4;

document.getElementById("showSub").innerHTML =`substraction of ${Num3} and ${Num4}=` +sub;
	
}
document.write("<br>");

function multiplication(){
let Num5 = parseFloat(document.getElementById("Num5").value);
	
let Num6 = parseFloat(document.getElementById("Num6").value);
	
let mul= Num5* Num6;
	
document.getElementById("displaymutliplication").innerHTML= `multiplication of ${Num5} and ${Num6}=` +mul;
	
}
document.write("<br>");

function division(){
let Num7 = parseFloat(document.getElementById("Num7").value);
	
let Num8 = parseFloat(document.getElementById("Num8").value);
	
let div = Num7/Num8;
	
document.getElementById("divShow").innerHTML= `division of ${Num7} and $ {Num8}=` +div;

}
document.write("<br>");

function sum(){
	let myNums =[1,2,3,4,5,6,7];
	let sum =0;
	
	for(let i= 0; i<myNums; i++){
		for (let i = 0; i < myNums.length; i++ ) {
	sum += myNums[i];
}
	}
document.write(sum) 
	
}




