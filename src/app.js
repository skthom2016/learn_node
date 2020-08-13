const path = require('path')
const express = require('express')
const hbs = require('hbs')
//const forecast  = require('../../../node-course/notes-app/');
const app = express()
app.use(express.static(path.join(__dirname,'../public')))
//const partialsPath = 

// app.com
// app.com/help
// app.com/about
// app.com/weather
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'../templates/views'))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

app.get('', (req, res)=>{
    //res.send('I love you Jesus')
    res.render('index', {
        title: "I love you Jesus. I am sorry"
    })
})

app.get('/help', (req, res)=>{
    res.render('help',{
        title:'I love you Jesus, please help us'})
})

app.get('/about', (req, res)=>{
    res.render('about',{
        title:'<h1>I love you Jesus. I live for you</h1>',
        author:'Santhosh Thomas'})
})

app.get('/weather', (req, res)=>{
    res.send({
        location: 'Ranni, Kerala',
        geo:{lat: '71', lon:'41'}
    })
})

app.listen(3000, ()=>{
    console.log(' the sever is listening to port 3000')
})