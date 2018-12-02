const functions = require('./conversion.functions')

exports.convert_input = function (input) {
    let isInputFormatCorrect = functions.checkInputFormat(input);
    
    if (!isInputFormatCorrect) {
        let response = functions.sendFormatError(input);
        return response;
    }

    let initNumber = isInputFormatCorrect[1];
    if (initNumber === "") {
        initNumber = 1;
    }  
    const initUnit = isInputFormatCorrect[5];

    let convertionResults = functions.convertHandler(initNumber, initUnit);
    let result = convertionResults[0];
    let returnUnit = convertionResults[1];
    let fixedResult = Number(result.toFixed(5));

    return({
            'initNum': initNumber,
            'initUnit': initUnit,
            'returnNum': result,
            'returnUnit': returnUnit,
            'string': `<code>${initNumber} ${initUnit} converts to ${fixedResult} ${returnUnit}</code>`
        });
}