const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

//app config
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(cors({ optionSuccessStatus: 200 }));

//public assets
app.use('/public', express.static(process.cwd() + '/public'));

//home routing
app.get("/", function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

const converter = require('./controllers/input.controller');

//api routing
app.get("/api/convert", converter.manage_input);

const listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});