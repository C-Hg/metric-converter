exports.convert_input = function (req, res) {
    let input = req.query.input;
    const globalRegex = /^(\d*(\.\d+)?(\/\d+(\.\d*)?)?)(gal|l|lbs|kg|mi|km)$/;

    let isInputFormatCorrect = input.match(globalRegex);
    if (!isInputFormatCorrect) {
        sendFormatError(input, res);
        return;
    }

    const initNumber = isInputFormatCorrect[1];  
    const initUnit = isInputFormatCorrect[5];

    let number = eval(initNumber);
    let result = "";
    let returnUnit = "";

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
    let fixedResult = Number(result.toFixed(5));

    res.json(
        {
            'initNum': initNumber,
            'initUnit': initUnit,
            'returnNum': result,
            'returnUnit': returnUnit,
            'string': `<code>${initNumber} ${initUnit} converts to ${fixedResult} ${returnUnit}</code>`
        });
    return;
}

sendFormatError = function (input, res) {
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
        res.json({"string" : "Invalid number"});
        return;
    }

    if (isNumberFormatCorrect) {
        res.json({"string" : "Invalid unit"});
        return;
    }
    res.json({"string" : "Invalid number and unit"});
    return;
}