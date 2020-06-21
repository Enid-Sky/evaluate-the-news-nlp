projectData = {}

const dotenv = require('dotenv')
dotenv.config();
var path = require('path')
const express = require('express')
var aylien = require("aylien_textapi");
// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});


const app = express()

app.use(express.static('dist'))

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})



//Post Data response
app.post('/api', async (req, res) => {
    const data = req.body.url;
    try {
        textapi.sentiment({
                'url': data
            },
            function (error, response) {
                if (error === null) {
                    res.send(response)
                }
            });
    } catch (err) {
        console.error(err)
    }
})