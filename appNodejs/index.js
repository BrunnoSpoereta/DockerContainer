const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Olá! Seja bem vindo à nossa API em Node JS')
})

app.get('/usuarios', function (req, res) {
  res.send('Fulano de Tal, Beltrano Silva, Siclano')
})

app.listen(8000, () => {
	console.log('API On-line!');
});