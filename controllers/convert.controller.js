exports.convert_input = function (req, res) {
    let input = req.query.input;
    const globalRegex = /^(\d*(\.\d+)?(\/\d+(\.\d*)?)?)(gal|l|lbs|kg|mi|km)$/;

    let isInputFormatCorrect = input.match(globalRegex);
    if (!isInputFormatCorrect) {
        sendFormatError(input, res);
        return;
    }

    res.json({error: 'no error'});
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
        res.send("Invalid number");
        return;
    }

    if (isNumberFormatCorrect) {
        res.send("Invalid unit");
        return;
    }
    res.send("Invalid number and unit");
    return;
}