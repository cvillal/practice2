const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/merncrud')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
})


app.get('/', (req, res) => {
    res.send('Making a todos app over here')
});

app.listen(3000, () => {
    console.log('listening...');
});