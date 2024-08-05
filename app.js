const express = require('express');
const app = express();
const path = require("path");
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/farm')
.then(() => {
    console.log("connected mongo")
}) 
.catch(err => {
    console.log("Oh no errorrr")
    console.log(err)
})


app.set('views' , path.join(__dirname, "views"));
app.set('view engine' , 'ejs');
app.use('/static' , express.static(path.join(__dirname , 'public')))




app.get('/', (req,res) => {
    res.render('home')
})




app.get('/about', (req,res) => {
    res.render('about')
})


app.get('/contact', (req,res) => {
    res.render('contact')
})


app.get('/thanks', (req,res) => {
    res.render('thanks')
})



app.get('/education', (req,res) => {
    res.render('education')
})


app.get('/experience', (req,res) => {
    res.render('experience')
})


app.get('/project', (req,res) => {
    res.render('project')
})


app.get('/certifications', (req,res) => {
    res.render('certifications')
})



app.get('/skills', (req,res) => {
    res.render('skills')
})













app.listen(8000, () => {
    console.log('App is on 8000 port!!')
})