const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

chai.use(chaiHttp)

suite('Functional tests', function () {
    suite('Api tests', function () {
        test('Homepage is responding', function (done) {
            chai.request('http://localhost:3000')
                .get('/')
                .end(function (err, res) {
                    assert.equal(res.status, 200);
                    done();
                })
        })

        test('5 gal is converted to 18.92705 l', function (done){
            chai.request('http://localhost:3000')
            .get('/api/convert?input=5gal')
            .end(function (err, res) {
                assert.include(res.text, '5 gal converts to 18.92705 l')
                done();
            })
        })

        test('5 l is converted to 1.32086 gal', function (done){
            chai.request('http://localhost:3000')
            .get('/api/convert?input=5l')
            .end(function (err, res) {
                assert.include(res.text, '5 l converts to 1.32086 gal')
                done();
            })
        })

        test('5 kg is converted to 11.02312 lbs', function (done){
            chai.request('http://localhost:3000')
            .get('/api/convert?input=5kg')
            .end(function (err, res) {
                assert.include(res.text, '5 kg converts to 11.02312 lbs')
                done();
            })
        })

        test('5 lbs is converted to 2.26796 kg', function (done){
            chai.request('http://localhost:3000')
            .get('/api/convert?input=5lbs')
            .end(function (err, res) {
                assert.include(res.text, '5 lbs converts to 2.26796 kg')
                done();
            })
        })

        test('5 mi is converted to 8.0467 km', function (done){
            chai.request('http://localhost:3000')
            .get('/api/convert?input=5mi')
            .end(function (err, res) {
                assert.include(res.text, '5 mi converts to 8.0467 km')
                done();
            })
        })

        test('5 km is converted to 3.10686 mi', function (done){
            chai.request('http://localhost:3000')
            .get('/api/convert?input=5km')
            .end(function (err, res) {
                assert.include(res.text, '5 km converts to 3.10686 mi')
                done();
            })
        })
    })
});


