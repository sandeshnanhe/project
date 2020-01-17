import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import home from './home';
/*const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/sendMail",(req,res) =>{
    console.log(req.body)
})
const { sendEmail } = require('./mail');


app.post("/api/sendMail", (req, res) => {

    console.log(req.body)
    sendEmail(req.body.email, req.body.name, "hello")

})


app.listen(5000,  () => {
    console.log( "Server Running at 5000 ");
})*/



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
