const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require("body-parser");
var cors = require("cors");
const PORT = process.env.PORT || 3000;

var corsOptions = {
    origin: "*"
};

const userRoutes = require('./routes/user');
const moduleRoutes = require('./routes/courseModule');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');


const app = express();
const user = 'user1';
const pw = 'blackrabbit1';
const db = 'Application';

app.use(cors(corsOptions)); // parse requests of content-type - application/x-www-form-urlencoded

const dbURI = 'mongodb+srv://' + user + ':' + pw + '@scast.nr5lz.mongodb.net/' + db + '?retryWrites=true&w=majority';
//console.log(dbURI);
mongoose.connect(dbURI)
    .then((result) => {
        console.log('connected to db!');
        //listen for reuqests
        app.listen(PORT, () => {
            console.log("server is listening to port " + PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });

app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send('Welcome to SCast Backend');
});
app.use('/user', userRoutes);
app.use('/module', moduleRoutes);
app.use('/post', postRoutes);
app.use('/comment', commentRoutes);

app.use((req, res) => {
    res.send('Page not found in SCast');
});
