let express = require('express');
let app = express();

let bodyParser = require('body-parser');

//Moteur de templates
app.set('view engine', 'ejs');

// Middleware
app.use('/assets', express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Routes
app.get('/', (request, response) => {
    response.render('pages/index', { test: 'salut' });
});

app.post('/', (request, response) => {
    console.log(request.body);
});

app.listen(8080);