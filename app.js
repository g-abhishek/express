var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes/user.route')(app);

var db_url = 'mongodb+srv://Abhishek:Abhishek@cluster0-qeeih.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(db_url, { useNewUrlParser: true,useUnifiedTopology: true },()=>{
    console.log('connected to database');
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(3002,()=>{
    console.log('server running on port 3002')
})