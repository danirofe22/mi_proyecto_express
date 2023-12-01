const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/data', async (req, res) => {
    try {
        const response = await axios.get('https://swapi.dev/api/people/1');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al recuperar datos de la API');
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});