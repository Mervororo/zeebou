// Importer Express.js
const express = require('express');

// Créer une application Express
const app = express();

// Définir une route
app.get('/', (req, res) => {
    res.send('Bonjour,!');
});

// Écouter le serveur sur le port 3000
app.listen(3000, () => {
    console.log('Le serveur est démarré sur le port 3000');
});
