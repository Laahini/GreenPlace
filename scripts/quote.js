
function calculateCostSolar() {

    var sunlightHours = 12 // Get user inputs

    var eUsage = parseFloat(document.getElementById("eUsage").value); // in kWh/month

    var eBill = parseFloat(document.getElementById("eBill").value); // hours/day
    var panelEfficiency = parseFloat(document.getElementById("panelEfficiency").value); // efficiency ratio
    var costPerWatt = parseFloat(document.getElementById("costPerWatt").value); // cost per watt
    var taxCutEligible = document.getElementById("federalTaxCut").checked;
    var laborCostPercentage = 0.1; // 10% of the total labor cost

    // Convert electricity usage to watts (since 1 kWh = 1000 watts)
    var eUsageWatts = eUsage * 1000; // in watts

    // Calculate monthly electricity production of the solar panel system
    var systemSize = eUsageWatts / (sunlightHours * panelEfficiency).toFixed(2); // in watts


    // Calculate total cost
    var totalCost = systemSize * costPerWatt; // labor cost will be added later

    // Calculate labor cost (10% of the total cost)
    var laborCost = totalCost * laborCostPercentage;


    // Add labor cost to the total cost
    totalCost += laborCost;

    if (taxCutEligible == true) {
    totalCost *= 0.70;
    }

    dollarPerkWh = (eBill/eUsage);                                                          
    savedCost = (eBill * 240) - totalCost;                                                          


    // Display result
    document.getElementById("totalCostSolar").innerHTML = "<h4>Total Installation Cost: $" + totalCost.toFixed(2) + " </h4>" + "<br>" + "<h4> Estimated savings after 20 years $" + savedCost.toFixed(2);


}


function calculateCostWind() {

    // Get user inputs
    var windSpeed = parseFloat(document.getElementById("windSpeed").value); // in kWh/month
    var monthlyBill = parseFloat(document.getElementById("monthlyBill").value);
    var efficiency = parseFloat(document.getElementById("efficiency").value); // hours/day
    var costPerKW = parseFloat(document.getElementById("costPerKW").value); // efficiency ratio

    var taxCutEligible = document.getElementById("federalTaxCut2").checked;
    var laborCostPercentage = 0.1; // 10% of the total labor cost

    // Calculate labor cost (10% of the total cost)
    var totalCost = (((windSpeed * efficiency * 0.01 * 24 * 365) / 1000) * costPerKW);                                                
    var laborCost = totalCost * laborCostPercentage;

    // Add labor cost to the total cost
    totalCost += laborCost;

    if (taxCutEligible == true) {
    totalCost *= 0.70;
    }

    totalSaved = (monthlyBill * 240) - totalCost;

    
    // Display result
    document.getElementById("totalCostWind").innerHTML = "<h4>Total Installation Cost: $" + totalCost.toFixed(2) + " </h4>" + "<br>" + "<h4> Estimated savings after 20 years: $" + totalSaved.toFixed(2);


}
