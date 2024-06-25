const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");


 
const app = express();

app.use(cors({
    origin: 'https://your-frontend-domain.vercel.app', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If you need to send cookies with requests
  }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
 
mongoose.connect("mongodb+srv://adithyanbasok:12345@todo.8xlz5cg.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) .then(()=>{
    console.log("Database is connected");
}).catch((error)=>{
    console.log(error);
})
 
// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));
 
// Parses the text as json
app.use(bodyParser.json());
 

const port = 3000;
 
app.listen(port, function () {
    console.log("Server is listening at port:" + port);
});