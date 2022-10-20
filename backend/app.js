const express = require('express');
const app = express();
const port = 5000;


app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/test', (req, res) => res.send({ name: 'koral', age: 30 }));

app.listen(port, () => console.log(`App listening on port ${port}`));