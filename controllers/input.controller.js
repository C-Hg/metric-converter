const manager = require('./functions/response.function');

exports.send_response = function (req, res) {
    let response = manager.convert_input(req.query.input);
    res.json(response);
}