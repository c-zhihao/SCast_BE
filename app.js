const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.listen(3000);
app.use((req, res) => {
    res.send('404 Page not Found');
});