const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.write('Hello, GIT !');
    res.end();
});

app.get('/hello/:name', (req, res) => {
    res.write(`Hello, ${req.params.name}`);
    res.end
}); 

app.get('/goodbye', (req, res) => {
    res.write('Goodbye');
    res.end();
});


app.listen(3000, _ => {
    console.log(`App listening on http://localhost:3000`);
});