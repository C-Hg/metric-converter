const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const

//enables CORS (facultative)
var cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 }));

// http://expressjs.com/en/starter/static-files.html
app.use('/public', express.static(process.cwd() + '/public'));


//home routing
app.get("/", function (req, res) {
   res.sendFile(__dirname + '/views/index.html');
});
