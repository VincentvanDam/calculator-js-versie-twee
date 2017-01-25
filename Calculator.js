var insert = document.getElementById('insert');
var som = [];
var cyf = "";
var op1 = false;

function cijfer1(cijfer){
 console.log(cijfer + " ");
 insert.innerHTML += cijfer;
 cyf += cijfer;
 console.log(cyf);

}

function cijfer(y) {
	som.push(cyf);
	cyf = "";
	if (op1 == true){
		answer = "";
		var op = som[som.length - 2];
		var num1 = som[som.length - 3];
		var num2 = som[som.length - 1];
		console.log(som);
		var anns = "";

		if (op == "-") {
		anns = num1 - num2;
		}else if (op == "+") {
		anns = parseFloat(num1) + parseFloat(num2);
		}else if (op == "/") {
		anns = num1 / num2;
		}else if (op == "*") {
		anns = num1 * num2;
	}
	som.splice(0,3);
	som.push(anns);
	answer.innerHTML += anns;

	}

	som.push(y);
 	insert.innerHTML += y;

	console.log(som);
	op1 = true;

}


function antwoord1(){
	var answer = document.getElementById('answer');
	answer = "";
	var op = som[som.length - 1];

	som.push(cyf);
	cyf = "";
var num1 = som[som.length - 3];
var num2 = som[som.length - 1];

var anns = "";
if (op == "-") {
	anns = num1 - num2;
}else if (op == "+") {
	anns = parseFloat(num1) + parseFloat(num2);
}else if (op == "/") {
	anns = num1 / num2;
}else if (op == "*") {
	anns = num1 * num2;
}

console.log(anns);
answer.innerHTML = anns;

}


