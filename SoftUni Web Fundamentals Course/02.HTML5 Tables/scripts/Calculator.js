		function Calc(input) {
			if (input != '+' && input != '-' && input != '*' && input != '/' && input != 'C' && input != '=')
				document.getElementById("exp").value += input
			else if (input != '=' && input != 'C')
				document.getElementById("exp").value += " " + input + " "
			else if (input == 'C')
				document.getElementById("exp").value = ""
			else if (input == '=')
				document.getElementById("exp").value = eval(document.getElementById("exp").value)
		}