const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('home.hbs', {
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Welcome to the Home Page of Some Website'
    });
    // response.send('<h1>Hello Express!</h1>');
    // response.send({
    //     name: 'Ujwal',
    //     likes: [
    //         'Food',
    //         'Music'
    //     ]
    // });
});

app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (request, response) => {
    response.send({
        errorMessage: 'Unable to process request'
    });
});

app.listen(3000, () => {
    console.log('Server is up and running on port 3000!');

});