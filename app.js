const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.use(express.static('public'))
app.get('/', (req,res) => res.sendFile(path.join(__dirname, '/views/index.html')))
app.get('/views/goku.html', (req,res) => res.sendFile(path.join(__dirname, '/views/goku.html')))
app.get('/views/vegeta.html', (req,res) => res.sendFile(path.join(__dirname, '/views/vegeta.html')))
app.get('/views/gohan.html', (req,res) => res.sendFile(path.join(__dirname, '/views/gohan.html')))
app.get('/views/piccolo.html', (req,res) => res.sendFile(path.join(__dirname, '/views/piccolo.html')))
app.get('/views/krilin.html', (req,res) => res.sendFile(path.join(__dirname, '/views/krilin.html')))
app.get('/views/ten-shin-han.html', (req,res) => res.sendFile(path.join(__dirname, '/views/ten-shin-han.html')))
app.get('/views/yamcha.html', (req,res) => res.sendFile(path.join(__dirname, '/views/yamcha.html')))


app.listen(port, () => console.log('Servidor corriendo en ' + port))