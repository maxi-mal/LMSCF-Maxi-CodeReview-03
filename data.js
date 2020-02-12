
function calculateInsurance(x, y, z) {
	var age = parseInt(document.getElementById("ageform").value);
	var horse_power = parseInt(document.getElementById("carform").value);
	var name = document.getElementById("nameform").value;
	var austria = document.getElementById("austria").selected;
	var greece = document.getElementById("greece").selected;
	var hungary = document.getElementById("hungary").selected;

	var x = horse_power * 100 / age + 50;
	var y = horse_power * 120 / age + 100;
	var z = horse_power * 150 / (age + 3) + 50;

	if (austria == true) {
		return + name +", your insurance costs " + x + "€";
	} if (greece == true) {
		return + name +", your insurance costs " + y + "€";
	} if (hungary == true) {
		return + name +", your insurance costs " + z + "€";
	}
}


var calculatedInsurance = 0;
			switch( countryId ) {
				case 1: // Austria
					insurance = hp * 100 / age + 50;
					break;
				case 2: // Hungary
					insurance = hp * 150 / age + 20;
					break;
				case 3: // Greece
					insurance = hp * 180 / age + 30;
					break;
			}
			
			document.getElementById("result").innerHTML= name + " , your payments are " + insurance;

	