const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    // response.send('<h1>Hello Express!</h1>');
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

app.listen(3000, () => {
    console.log('Server is up and running on port 3000!');

});