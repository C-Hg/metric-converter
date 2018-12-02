const chai = require('chai');
const assert = chai.assert;
const functions = require('../controllers/functions/conversion.functions');
const manager = require('../controllers/input.controller');

suite('Unit Tests', function(){
    suite('Function checkInputFormat', function(){
        test('whole number is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("32km"));
        });
        test('decimal number is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("3.2km"));
        });
        test('fractional number is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("3/2km"));
        });
        test('fractional and decimal number is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("3.2/2km"));
        });
        test('fractional decimals is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("3.2/5.2km"));
        });
        test('no number is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("km"));
        });
        test('double fraction is invalid input', function(){
            assert.isNull(functions.checkInputFormat("3/2/2km"));
        });
        test('two consecutive dots is invalid input', function(){
            assert.isNull(functions.checkInputFormat("3..2km"));
        });
        test('km is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("km"));
        });
        test('mi is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("mi"));
        });
        test('l is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("l"));
        });
        test('gal is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("gal"));
        });
        test('lbs is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("lbs"));
        });
        test('kg valid input', function(){
            assert.isNotNull(functions.checkInputFormat("kg"));
        });
        test('KM is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("KM"));
        });
        test('MI is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("MI"));
        });
        test('L is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("L"));
        });
        test('GAL is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("GAL"));
        });
        test('LBS is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("LBS"));
        });
        test('KG valid input', function(){
            assert.isNotNull(functions.checkInputFormat("KG"));
        });
        test('no unit is invalid input', function(){
            assert.isNull(functions.checkInputFormat("32"));
        });
        test('kgs is invalid input', function(){
            assert.isNull(functions.checkInputFormat("kgs"));
        });
        test('character between number and unit is invalid input', function(){
            assert.isNull(functions.checkInputFormat("3ekm"));
        });
    })
    
    suite('Function sendFormatError', function(){
        test('3.2.2km is invalid number', function(){
            assert.deepEqual(functions.sendFormatError("3.2.2km"), {"string" : "Invalid number"});
        });
        test('3.2/.km is invalid number', function(){
            assert.deepEqual(functions.sendFormatError("3.2/.km"), {"string" : "Invalid number"});
        });
        test('32klm is invalid unit', function(){
            assert.deepEqual(functions.sendFormatError("32klm"), {"string" : "Invalid unit"});
        });
        test('32k is invalid unit', function(){
            assert.deepEqual(functions.sendFormatError("32k"), {"string" : "Invalid unit"});
        });
        test('3..2klm is invalid unit and number', function(){
            assert.deepEqual(functions.sendFormatError("3..2klm"), {"string" : "Invalid number and unit"});
        });
    })

    suite('Function convertHandler', function(){
        test('gal is converted to l', function(){
            let result = functions.convertHandler(10, "gal");
            assert.equal(result[1] , "l");
        });
        test('l is converted to gal', function(){
            let result = functions.convertHandler(10, "l");
            assert.equal(result[1] , "gal");
        });
        test('kg is converted to lbs', function(){
            let result = functions.convertHandler(10, "kg");
            assert.equal(result[1] , "lbs");
        });
        test('lbs is converted to kg', function(){
            let result = functions.convertHandler(10, "lbs");
            assert.equal(result[1] , "kg");
        });
        test('mi is converted to km', function(){
            let result = functions.convertHandler(10, "mi");
            assert.equal(result[1] , "km");
        });
        test('km is converted to mi', function(){
            let result = functions.convertHandler(10, "km");
            assert.equal(result[1] , "mi");
        });
        test('5 gal is converted to 18.92705', function(){
            let result = functions.convertHandler(5, "gal");
            assert.approximately(Number(result[0]) , 18.92705, 0.00001);
        });
        test('5 l is converted to 1.32086', function(){
            let result = functions.convertHandler(5, "l");
            assert.approximately(Number(result[0]) , 1.32086, 0.00001);
        });
        test('5 kg is converted to 11.02312', function(){
            let result = functions.convertHandler(5, "kg");
            assert.approximately(Number(result[0]) , 11.02312, 0.00001);
        }); 
        test('5 lbs is converted to 2.26796', function(){
            let result = functions.convertHandler(5, "lbs");
            assert.approximately(Number(result[0]) , 2.26796, 0.00001);
        });
        test('5 mi is converted to 8.0467', function(){
            let result = functions.convertHandler(5, "mi");
            assert.approximately(Number(result[0]) , 8.0467, 0.00001);
        });
        test('5 km is converted to 3.10686', function(){
            let result = functions.convertHandler(5, "km");
            assert.approximately(Number(result[0]) , 3.10686, 0.00001);
        });

    })
})