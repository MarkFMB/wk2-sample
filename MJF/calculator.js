/*
   currrency name(s)
   conversion rate
   countries
   input

*/

var currencyName1, 
	currencyName2,
	countryName1,
	countryName2,
	amount1,
	amount2,
	conversionRate;

countryName1 = 'USA';
countryName2 = 'India';
currencyName1 = 'dollars';
currencyName2 = 'rupees';
conversionRate = 66.01;

// Calculate conversion

document.getElementById('calculateButton').onclick = function () {
	// get user's input
	amount1 = document.getElementById('amount1').value;
	// calculate the result
	amount2 = amount1 * conversionRate;

	// write theresult to the page

	document.getElementById('amount2').value = amount2;
};


