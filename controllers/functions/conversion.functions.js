exports.checkInputFormat = function (input) {
    const globalRegex = /^(\d*(\.\d+)?(\/\d+(\.\d*)?)?)(gal|l|lbs|kg|mi|km)$/i
    return input.match(globalRegex);
}

exports.convertHandler = function (initNumber, initUnit) {
    let result = "";
    let returnUnit = "";
    let number = eval(initNumber);

    switch (initUnit) {
        case "gal":
            result = number * 3.78541;
            returnUnit = "l";
            break;

        case "l":
            result = number / 3.78541;
            returnUnit = "gal";
            break;

        case "lbs":
            result = number * 0.453592;
            returnUnit = "kg";
            break;

        case "kg":
            result = number / 0.453592;
            returnUnit = "lbs";
            break;

        case "mi":
            result = number * 1.60934;
            returnUnit = "km";
            break;

        case "km":
            result = number / 1.60934;
            returnUnit = "mi";
            break;
    }
    return ([result, returnUnit]);
};

exports.sendFormatError = function (input) {
    const numberRegex = /^(\d*(\.\d+)?(\/\d+(\.\d*)?)?)$/;
    const unitRegex = /^(gal|l|lbs|kg|mi|km)$/;
    const firstLetter = input.search(/[a-z]/i);   

    let unit = input.substr(firstLetter);
    let number = input.substr(0, firstLetter);

    let isNumberFormatCorrect = false;
    if (firstLetter !== -1) {
        isNumberFormatCorrect = numberRegex.test(number);
    }
    let isUnitFormatCorrect = unitRegex.test(unit);

    if (isUnitFormatCorrect) {
        return({"string" : "Invalid number"});   
    }

    if (isNumberFormatCorrect) {
        return({"string" : "Invalid unit"});  
    }

    return({"string" : "Invalid number and unit"});
}