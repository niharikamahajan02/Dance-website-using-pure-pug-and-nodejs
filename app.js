const express=require("express");
const fs =require("fs");
const path = require("path");
const app=express();
const port =8000;


//EXPRESS files
app.use('/static',express.static('static'))
app.use(express.urlencoded())

//PUG
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

// ENDPOINTS
app.get('/', (req, res)=>{
   // const con = "This is the best content on the internet so far so use it wisely"
    const params = { }
    res.status(200).render('home.pug', params);
 })

 app.get('/contact', (req, res)=>{
   // const con = "This is the best content on the internet so far so use it wisely"
    const params = { }
    res.status(200).render('contact.pug', params);
 })
 app.listen(port,()=>{
    console.log(`running on port ${port}`)
 })

