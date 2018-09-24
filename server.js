const express = require('express');

var app = express();

app.get('/', (request, response) => {
    // response.send('<h1> Hello Express!</h1>');
    response.send({
        name: 'Ujwal',
        likes: [
            'Food',
            'Music'
        ]
    });
});

app.get('/about', (request, response) => {
    response.send('About Page');
});

app.get('/bad', (request, response) => {
    response.send({
        errorMessage: 'Unable to process request'
    });
});

app.listen(3000);