const express = require('express')
const app = express()

const path = require('path')

const hbs = require('express-handlebars');
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir:__dirname+ '/views/layouts/',
}))

app.use(express.static('public'));

const mysql = require('mysql')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))

const articleRouts = require('./routers/article')
app.use('/',articleRouts)
app.use('/article', articleRouts)

const authorRouts = require('./routers/author')
app.use('/', authorRouts)

const authRouts = require('./routers/auth')
app.use('/',authRouts)
app.use('/auth', authRouts)


process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception: ', err);
});

app.listen(3000, () =>{
    console.log('app us started at http://localhost:3000');
})