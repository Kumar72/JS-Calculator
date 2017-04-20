var math = initializeMathLibrary;
var num = false;
var num1 = '';
var num2 = '';
var symbol = '';
var equal = false;

$(document).ready(function(){
	console.log('loaded calculator');
	initializeMathLibrary();
	config();
});


var config = (function () {
	//Use the following to store numbers and conduct various operations

	var makeCalculator = function() {
		var $calc = $('<form>');
			$calc.attr('name', 'Calculator JS');


		var $display = $('<input>');
			$display.attr('id','calculator');
			$display.addClass('display');
			$display.attr('type','text');
			$display.attr('readonly', true);
			$display.attr('value','0');
		var br = $('<br>');
		$calc.append($display, br);

		var $buttonClear = $('<input>');
			$buttonClear.attr('type','button');
			$buttonClear.addClass('num-button clear');
			$buttonClear.attr('value','C');
			$buttonClear.attr('onclick','math("C")');
		var $buttonSign = $('<input>');
			$buttonSign.attr('type','button');
			$buttonSign.addClass('num-button sign');
			$buttonSign.attr('value','+/-');
			$buttonSign.attr('onclick','math("#")');
		var $buttonPercent = $('<input>');
			$buttonPercent.attr('type','button');
			$buttonPercent.addClass('num-button percent');
			$buttonPercent.attr('value','%');
			$buttonPercent.attr('onclick','math("%")');
		var $buttonPower = $('<input>');
			$buttonPower.attr('type','button');
			$buttonPower.addClass('num-button power');
			$buttonPower.attr('value','⌃');
			$buttonPower.attr('onclick','math("^")');
		var $br = $('<br>');

		$calc.append($buttonClear, $buttonSign, $buttonPercent, $buttonPower, $br);

		var $button7 = $('<input>');
			$button7.attr('type','button');
			$button7.addClass('num-button seven');
			$button7.attr('value','7');
			$button7.attr('onclick','math("7")');
		var $button8 = $('<input>');
			$button8.attr('type','button');
			$button8.addClass('num-button eight');
			$button8.attr('value','8');
			$button8.attr('onclick','math("8")');
		var $button9 = $('<input>');
			$button9.attr('type','button');
			$button9.addClass('num-button nine');
			$button9.attr('value','9');
			$button9.attr('onclick','math("9")');
		var $buttonDivide = $('<input>');
			$buttonDivide.attr('type','button');
			$buttonDivide.addClass('num-button divide');
			$buttonDivide.attr('value','/');
			$buttonDivide.attr('onclick','math("/")');
		var $br1 = $('<br>')

		$calc.append($button7, $button8, $button9, $buttonDivide, $br1);

		var $button4 = $('<input>');
			$button4.attr('type','button');
			$button4.addClass('num-button four');
			$button4.attr('value','4');
			$button4.attr('onclick','math("4")');
		var $button5 = $('<input>');
			$button5.attr('type','button');
			$button5.addClass('num-button five');
			$button5.attr('value','5');
			$button5.attr('onclick','math("5")');
		var $button6 = $('<input>');
			$button6.attr('type','button');
			$button6.addClass('num-button six');
			$button6.attr('value','6');
			$button6.attr('onclick','math("6")');
		var $buttonMultipy = $('<input>');
			$buttonMultipy.attr('type','button');
			$buttonMultipy.addClass('num-button multiply');
			$buttonMultipy.attr('value','x');
			$buttonMultipy.attr('onclick','math("*")');
		var $br2 = $('<br>')

		$calc.append($button4, $button5, $button6, $buttonMultipy, $br2);

		var $button1 = $('<input>');
			$button1.attr('type','button');
			$button1.addClass('num-button one');
			$button1.attr('value','1');
			$button1.attr('onclick','math("1")');
		var $button2 = $('<input>');
			$button2.attr('type','button');
			$button2.addClass('num-button two');
			$button2.attr('value','2');
			$button2.attr('onclick','math("2")');
		var $button3 = $('<input>');
			$button3.attr('type','button');
			$button3.addClass('num-button three');
			$button3.attr('value','3');
			$button3.attr('onclick','math("3")');
		var $buttonMinus = $('<input>');
			$buttonMinus.attr('type','button');
			$buttonMinus.addClass('num-button minus');
			$buttonMinus.attr('value','-');
			$buttonMinus.attr('onclick','math("-")');
		var $br3 = $('<br>')

		$calc.append($button1, $button2, $button3, $buttonMinus, $br3);

		var $button = $('<input>');
			$button.attr('type','button');
			$button.addClass('num-button zero');
			$button.attr('value','0');
			$button.attr('onclick','math("0")');
		var $buttonDecimal = $('<input>');
			$buttonDecimal.attr('type','button');
			$buttonDecimal.addClass('num-button decimal');
			$buttonDecimal.attr('value','.');
			$buttonDecimal.attr('onclick','math(".")');
		var $buttonEqual = $('<input>');
			$buttonEqual.attr('type','button');
			$buttonEqual.addClass('num-button equal');
			$buttonEqual.attr('value','=');
			$buttonEqual.attr('onclick','math("=")');
		var $buttonPlus = $('<input>');
			$buttonPlus.attr('type','button');
			$buttonPlus.addClass('num-button plus');
			$buttonPlus.attr('value','+');
			$buttonPlus.attr('onclick','math("+")');

		$calc.append($button, $buttonDecimal, $buttonEqual, $buttonPlus);

		$('div').append($calc);
	}

	makeCalculator();
})
