$(document).ready(function(){
	console.log('loaded calculate');
});

var initializeMathLibrary = (function () {

	var math = function(value) {

		if(!isNaN(value) || value == '.') {
			if(!equal) {
				if (num === true) {
					number2(value);
					// console.log('math function num 2: '+ value);
				}
				else {
					number1(value);
				// console.log('math fucntion num 1: '+ value);
				}
			}
			else {
				equal = false;
				num1 = '';
				num2 = '';
				symbol = '';
				num = false;
				number1(value);
			}
		}
		else {
			num = true;
			if(value === 'C') {
				num1 = '';
				num2 = '';
				symbol = '';
				num = false;
				$('#calculator').val(0);
				console.log('num1 = ' + num1+'num2 = '+num2 +'operaton = '+ symbol + 'boolean = '+ num );
			}
			else if(value == '='){
				equal = true;
				num1 = execute();
				$('#calculator').val(num1);
				console.log('Equal test = ' + num1);		//Works
			}
			else if(value == '+' ||value == '-' ||value == '/' ||value == '*' ||value == '^' || value == '%' || value == '#') {
				console.log(value);
				operation(value);
			}
		}
	}

	var number1 = function(value) {
		num1 = num1 + value;
		$('#calculator').val(num1);
		console.log('number1 : ' + num1);
	}
	var number2 = function(value) {
		num2 = num2 + value;
		$('#calculator').val(num2);
		console.log('number2 : ' + num2);
	}


	var operation = function (value) {
	//if an opperation is selected do the math prior to the next operation
	//if = then do the same opperation again
	//if ## then opperation then number is given, print the value on the next click
		if(num2 != 0 && num1 != 0) {
			num1 = execute();
			num2 = '';
			symbol = value;
			num1 = String(num1)
			$('#calculator').val(num1);
			console.log('value = ' + num1);
		}
		else {
			symbol = value;
		}
	}

	var execute = function() {
		switch (symbol){
			case '+':
				return parseFloat(num1) + parseFloat(num2);
			case '-':
				console.log("substraction");
				return parseFloat(num1) - parseFloat(num2);
			case '/':
				return parseFloat(num1) / parseFloat(num2);
			case '*':
				return parseFloat(num1) * parseFloat(num2);
			case '%':
				return (parseFloat(num1) / parseFloat(num2))*100;
			case '^':
				return Math.pow(parseFloat(num1),parseFloat(num2));
			case '#':
				if(parseInt(num1) > 0) {
					$('#calculator').val(-parseInt(num1));
					return parseInt(num1) * -1;
				}
				else {
				return parseInt(num1) * -1;
				}
		}
	}

	return math;
})()
