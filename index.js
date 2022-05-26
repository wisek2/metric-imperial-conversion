let converNumber = document.getElementById("convertNumber-el")
let number = prompt("Please enter the number you wish to convert")
converNumber.textContent = number

let lengthMetric = document.getElementById("lengthMetImp-el") //Length: meters * feet
let lengthImperial = document.getElementById("lengthImpMet-el") //Length: feet * meters
let volumeMetric = document.getElementById("volumeMetImp-el") //Volume: liters * gallons
let volumeImperial = document.getElementById("volumeImpMet-el") //Volume: gallons * liters
let massMetric = document.getElementById("massMetImp-el") //Mass: kilograms * pounds
let massImperial = document.getElementById("massImpMet-el") //Mass: pounds * kilograms

/*
    metricImperial Ratio
1 meter = 3.28084 feet
1 liter = 0.264172 gallons
1 kilogram = 2.20462 pounds
    imperialMetric Ratio
1 foot = 0.3048 meters
1 gallon = 3.78541 liters
1 pound = 0.453592 kilograms
*/

//Length: meters * feet
lengthMetric.textContent = number + " meters = " + (number * 3.28084).toFixed(3) + " feet"

//Length: feet * meters
lengthImperial.textContent = number + " feet = " + (number * 0.3048).toFixed(3) + " meters"

//Volume: liters * gallons
volumeMetric.textContent = number + " liters = " + (number * 0.264172).toFixed(3) + " gallons"

//Volume: gallons * liters
volumeImperial.textContent = number + " gallons = " + (number * 3.78541).toFixed(3) + " liters"

//Mass: kilograms * pounds
massMetric.textContent = number + " kilos = " + (number * 2.204620).toFixed(3) + " pounds"

//Mass: pounds * kilograms
massImperial.textContent = number + " pounds = " + (number * 0.453592).toFixed(3) + " kilos"