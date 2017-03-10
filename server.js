const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))});

app.listen(process.env.PORT || 8723);

module.exports = {app};
