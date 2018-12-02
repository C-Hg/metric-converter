const chai = require('chai');
const assert = chai.assert;
const functions = require('../controllers/functions/conversion.functions');
const manager = require('../controllers/input.controller');

suite('Unit Tests', function(){
    suite('Function checkInputFormat', function(){
        test('whole number is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("32km"));
        })
        test('decimal number is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("3.2km"));
        })
        test('fractional number is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("3/2km"));
        })
        test('fractional and decimal number is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("3.2/2km"));
        })
        test('fractional decimals is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("3.2/5.2km"));
        })
        test('no number is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("km"));
        })
        test('double fraction is invalid input', function(){
            assert.isNull(functions.checkInputFormat("3/2/2km"));
        })
        test('two consecutive dots is invalid input', function(){
            assert.isNull(functions.checkInputFormat("3..2km"));
        })
        test('km is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("km"));
        })
        test('mi is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("mi"));
        })
        test('l is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("l"));
        })
        test('gal is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("gal"));
        })
        test('lbs is valid input', function(){
            assert.isNotNull(functions.checkInputFormat("lbs"));
        })
        test('kg valid input', function(){
            assert.isNotNull(functions.checkInputFormat("kg"));
        })

    })
})