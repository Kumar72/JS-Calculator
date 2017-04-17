$(document).ready(function(){
console.log('loaded');
functionality();
});


var functionality = function () {

}

var math = function(value) {
	if(!isNaN(value)) {
		// console.log('num'+value);	//works
		if(num1 === undefined) {
			num1 = parseInt(value);
			$('#data').val(num1);

		}
		else if(num1 != undefined && num2 === undefined) {
			num2 = parseInt(value);
			$('#data').val(num2);
			// console.log("num1 is " + num1);		//Works
			// console.log("num2 is "+ num2);		//Works

		}
		else if (num1 != undefined && num2 != undefined) {
			num1 = num2;
			num2 = parseInt(value);
			$('#data').val(num2);
			// console.log("num1 is " + num1);		//Works
			// console.log("num2 is "+ num2);		//Works
		}
	}
	else{
		// if(value === 'C') {		//fix this so that it calls empty()
		// 	num1 = undefined;
		// 	num2 = undefined;
		// 	console.log(num1 +'num 1 & num 2' + num2);
		// 	$('#data').val(0);
		//
		// else {
		// 	if(value === '+') {
		// 		operation = '+';
		// 	}
		// 	else if(value === '-') {
		// 		operation = '-';
		// 	}
		// 	else if(value === '*') {
		// 		operation = '*';
		// 	}
		// 	else if(value === '/') {
		// 		operation = '/';
		// 	}
		// 	else if(value === '^') {
		// 		operation = '^';
		// 	}
		// 	else if(value === '%') {
		// 		operation = '%';
		// 	}
		// }
		//
		// }
		//
		// }
		console.log('not num'+value);	//works
	}
}
