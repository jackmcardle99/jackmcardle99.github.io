var dropdown = document.getElementById("ddl");
dropdown.addEventListener("change",handleDropdown);

var dropdown = document.getElementById("inputNumber");
dropdown.addEventListener("change",handleDropdown);

function handleDropdown(){
    var e = document.getElementById("ddl").value;
    if (e == "bulking"){
        updateTableBulking();
    }
    else{
        updateTableShredding();
    }
}

function updateTableBulking(){
    var inputKG = document.getElementById("inputNumber").value;
    var table = document.getElementById("tbody");
    var noRows = 10;
    var multiplier = 22;

    while (table.rows.length > 1) {
        table.deleteRow(1);
      }
    
    for(var i = 1; i <= noRows; i++){
        var calories = (inputKG * (multiplier));
        var proteinInGrams = (inputKG * 2); // in grams
        var energyInCalories = (calories - (proteinInGrams * 4)) / 2 // carb intake in calories
        var carbInGrams = (energyInCalories / 4);
        var fatInGrams = (energyInCalories / 9);
        
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        
        cell1.innerHTML = (i);
        cell2.innerHTML = multiplier;
        cell3.innerHTML = calories;
        cell4.innerHTML = Math.round(carbInGrams);
        cell5.innerHTML = Math.round(fatInGrams);

        multiplier = multiplier + 2;
        if(multiplier==32) multiplier=22;
    }

}

function updateTableShredding(){
    
    var inputKG = document.getElementById("inputNumber").value;
    var table = document.getElementById("tbody");
    var noRows = 12;
    var multiplier = 22;
    
    while (table.rows.length > 1) {
        table.deleteRow(1);
      }
    
    for(var i = 1; i <= noRows; i++){
        if(multiplier==12) multiplier=22;
        var calories = (inputKG * (multiplier));
        var proteinInGrams = (inputKG * 2); // in grams
        var energyInCalories = (calories - (proteinInGrams * 4)) / 2 // carb intake in calories
        var carbInGrams = (energyInCalories / 4);
        var fatInGrams = (energyInCalories / 9);
        
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        
        cell1.innerHTML = (i);
        cell2.innerHTML = multiplier;
        cell3.innerHTML = calories;
        cell4.innerHTML = Math.round(carbInGrams);
        cell5.innerHTML = Math.round(fatInGrams);


        multiplier = multiplier - 2;
        if(i==11){
            cell1.innerHTML = i + " (optional)";
            cell2.innerHTML = 14;
            cell3.innerHTML = (inputKG * 14);
            cell4.innerHTML = Math.round((((inputKG * 14) - (proteinInGrams - 4) / 2) / 4));
            cell4.innerHTML = Math.round((((inputKG * 14) - (proteinInGrams - 4) / 2) / 9));
            multiplier = 22;
        }
    }
}