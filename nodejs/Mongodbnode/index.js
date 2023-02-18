const express = require('express');
require('./modals/db')
const app = express()
const port = 3000
const cors = require("cors")
const path = require('path')
const Handlebars = require('handlebars')
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const { engine } = require ('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const bodyparser =require('body-parser')
app.use(bodyparser.json)
app.use(bodyparser.urlencoded({extended:false}))

const studentController = require('./controlers/studentController')
app.use(cors({
    origin:"*"
}))
app.options("*", cors())
app.get('/',(req,res)=>{
    res.statu(200).send(
        `<h2>Welcome to students database</h2>`);
})
app.set('views', path.join(__dirname, '/views/'))
app.engine('hbs', hbs.engine({ 
    extname: 'hbs', 
    defaultLayout: 'mainLayout', 
    layoutsDir: __dirname + '/views/layouts/', 
    handlebars: allowInsecurePrototypeAccess(Handlebars) }))
app.set('view engine', 'hbs')

app.use('/student', studentController)

app.listen(port,()=>{
    console.log(`server listening to port ${port}`);
})