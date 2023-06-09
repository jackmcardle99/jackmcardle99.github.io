// Calories Per Gram
const proteinKcal = 4; //change bakc to 4
const fatKcal = 9;
const carbKcal =4;


var dropdown = document.getElementById("ddl");
dropdown.addEventListener("change",handleDropdown);

var dropdown = document.getElementById("inputNumber");
dropdown.addEventListener("change",handleDropdown);

function handleDropdown(){
    var e = document.getElementById("ddl").value;
    if(e != "default"){
        if (e == "bulking"){
            updateTableBulking();
        }
        else if(e == "shredding-oversize"){
            updateTableShreddingOversize();
        }
        else{
            updateTableShredding();
        }
    }
    
}


function updateTableBulking(){
    var inputKG = document.getElementById("inputNumber").value;
    document.getElementById("protein").innerHTML = "Protein = " + (inputKG * 2) + "g (" + ((inputKG * 2) * 4) + " kcal)";
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
        row.classList.add("bg-white");
        row.classList.add("border-b");
        row.classList.add("text-black");
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        
        cell1.innerHTML = (i);
        cell2.innerHTML = Math.round(calories) + " kcal";
        cell3.innerHTML = Math.round(carbInGrams) + "g";
        cell4.innerHTML = Math.round(fatInGrams) + "g";

        cell1.classList.add("px-6");
        cell1.classList.add("py-4");
        cell2.classList.add("px-6");
        cell2.classList.add("py-4");
        cell3.classList.add("px-6");
        cell3.classList.add("py-4");
        cell4.classList.add("px-6");
        cell4.classList.add("py-4");
        multiplier = multiplier + 2;
        if(multiplier==32) multiplier=22;
    }

}

function updateTableShredding(){
    
    var inputKG = document.getElementById("inputNumber").value
    var table = document.getElementById("tbody");
    var noRows = 12;
    var multiplier = 22;
    
    while (table.rows.length > 1) {
        table.deleteRow(1);
      }
    
    for(var i = 1; i <= noRows; i++){
        if(multiplier==12) multiplier=22;
        var baselineCaloricNeed = (inputKG * (multiplier));
        var proteinInGrams = (inputKG * 2); // in grams
        var proteinCaloriesTotal = (proteinInGrams * proteinKcal);
        // var proteinCaloriesTotal = 1000;
        var energyInCalories = (baselineCaloricNeed - proteinCaloriesTotal);
        var carbInGrams = (energyInCalories / 2) / 4;
        var fatInGrams = (energyInCalories / 2) / 9;
        
        var row = table.insertRow(i);
        row.classList.add("bg-white");
        row.classList.add("border-b");
        row.classList.add("text-black");
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        
        cell1.innerHTML = (i);
        cell2.innerHTML = baselineCaloricNeed + " kcal";
        cell3.innerHTML = Math.round(carbInGrams) + "g";
        cell4.innerHTML = Math.round(fatInGrams) + "g";

        cell1.classList.add("px-6");
        cell1.classList.add("py-4");
        cell2.classList.add("px-6");
        cell2.classList.add("py-4");
        cell3.classList.add("px-6");
        cell3.classList.add("py-4");
        cell4.classList.add("px-6");
        cell4.classList.add("py-4");

        multiplier = multiplier - 2;
        if(i==11){
            cell1.innerHTML = i + " (optional)";
            cell2.innerHTML = (inputKG * 14) + " kcal";
            cell3.innerHTML = Math.round((((inputKG * 14) - (proteinInGrams - 4) / 2) / 4)) + "g";
            cell4.innerHTML = Math.round((((inputKG * 14) - (proteinInGrams - 4) / 2) / 9)) + "g";
            multiplier = 22;
        }
        document.getElementById("protein").innerHTML = "Protein = " + proteinInGrams + "g (" + proteinCaloriesTotal + " kcal)";
}
}


function updateTableShreddingOversize(){

    var inputKG = document.getElementById("inputNumber").value
    var table = document.getElementById("tbody");
    var noRows = 12;
    var multiplier = 22;
    
    while (table.rows.length > 1) {
        table.deleteRow(1);
      }
    
    for(var i = 1; i <= noRows; i++){
        if(multiplier==12) multiplier=22;
        var baseCalories = (inputKG * (multiplier));
        var proteinInGrams = (inputKG * 2);
        var proteinExcess = (proteinInGrams - 200);
        var proteinExcessInCalories = (proteinExcess * proteinKcal);
        if (proteinInGrams > 200) proteinInGrams = 200;
        var caloriesFinal = (baseCalories - proteinExcessInCalories) - (proteinInGrams * proteinKcal);
        var carbInGrams = (caloriesFinal / 2) / 4;
        var fatInGrams = (caloriesFinal / 2) / 9;
        
        var row = table.insertRow(i);
        row.classList.add("bg-white");
        row.classList.add("border-b");
        row.classList.add("text-black");
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        
        cell1.innerHTML = (i);
        cell2.innerHTML = Math.round(caloriesFinal) + " kcal";
        cell3.innerHTML = Math.round(carbInGrams) + "g";
        cell4.innerHTML = Math.round(fatInGrams) + "g";
        if(inputKG == 0){
            cell1.innerHTML = (i);
            cell2.innerHTML = 0;
            cell3.innerHTML = 0;
            cell4.innerHTML = 0;
        }

        cell1.classList.add("px-6");
        cell1.classList.add("py-4");
        cell2.classList.add("px-6");
        cell2.classList.add("py-4");
        cell3.classList.add("px-6");
        cell3.classList.add("py-4");
        cell4.classList.add("px-6");
        cell4.classList.add("py-4");
        
        document.getElementById("protein").innerHTML = "Protein = " + proteinInGrams + "g (" + (proteinInGrams * 4) + " kcal)";
        
        multiplier = multiplier - 2;

        if(i==11){
            cell1.innerHTML = i + " (optional)";
            cell2.innerHTML = (calories - differenceCalories) + " kcal";
            cell3.innerHTML = Math.round((((inputKG * 14) - (proteinInGrams - 4) / 2) / 4)) + "g";
            cell4.innerHTML = Math.round((((inputKG * 14) - (proteinInGrams - 4) / 2) / 9)) + "g";
            multiplier = 22;
        }
    }
}
