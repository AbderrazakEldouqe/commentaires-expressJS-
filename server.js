let express = require('express');
let app = express();

let bodyParser = require('body-parser');

let session = require('express-session');
//Moteur de templates
app.set('view engine', 'ejs');

// Middleware
app.use('/assets', express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(session({
    secret: 'hero',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

//flash
app.use(require('./middlewares/flash'));

//Routes
app.get('/', (request, response) => {
    console.log(response.locals.flash);
    response.render('pages/index', { test: 'salut' });
});

app.post('/', (request, response) => {
    if (request.body.message === undefined || request.body.message === '') {
        request.flash('error',"vous n'avez pas entrer un message");
        response.redirect('/');
    }else{
        request.flash('success',"message envoyé");
        response.redirect('/');
    }
});

app.listen(8000);