const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.write('Hello, GIT !');
    res.end();
});

app.listen(3000, _ => {
    console.log(`App listening on http://localhost:3000`);
});