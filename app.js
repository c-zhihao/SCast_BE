const express = require('express');
const mongoose = require('mongoose');
var http = require("http");
const PORT = process.env.PORT || 3000;

const userRoutes = require('./routes/user');


const app = express();
const user = 'user1';
const pw = 'blackrabbit1';
const db = 'Application';

const dbURI = 'mongodb+srv://' + user + ':' + pw + '@scast.nr5lz.mongodb.net/' + db + '?retryWrites=true&w=majority';
console.log(dbURI);
mongoose.connect(dbURI)
    .then((result) => {
        console.log('connected to db!');
        //listen for reuqests
        app.listen(PORT,()=>{
            console.log("server is listening to port "+PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });


app.use('/user',userRoutes);

app.use((req, res) => {
    res.send('404 Page not Found hi test test');
});
