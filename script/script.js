function addValue(){
    // get the operands value

    // parse to integer. You can use: parseInt(input, 10);

    // perform operation

    // creating the text output

    // (if you want to check) print out in console

    // change the text area
    var a = parseFloat(document.getElementById("input_a").value);
    var b = parseFloat(document.getElementById("input_b").value);
    if(isNaN(a) || isNaN(b)){
        alert("Your input is not accepted!!");
    }else{
        var output = a + b
        var text = a + " + "+ b+ " = " + output
        document.mycalculator.output.value = text;
    }

    
}


function mulValue(){
    var a = parseFloat(document.getElementById("input_a").value);
    var b = parseFloat(document.getElementById("input_b").value);
    if(isNaN(a) || isNaN(b)){
        alert("Your input is not accepted!!");
    }else{
        var output = a * b;
        var text = a + " * "+ b+ " = " + output;
        document.mycalculator.output.value = text;
    }
}

function divValue(){
    var a = parseFloat(document.getElementById("input_a").value);
    var b = parseFloat(document.getElementById("input_b").value);
    if(isNaN(a) || isNaN(b)){
        alert("Your input is not accepted!!");
    }else{
        var output = a / b;
        var text = a + " / "+ b+ " = " + output
        document.mycalculator.output.value = text;
    }
}
