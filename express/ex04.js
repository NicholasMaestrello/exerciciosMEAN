const express = require('express')
const server = express()

server.route('/cliente')
.get((req, res) => res.send('lista de clientes'))
.post((req, res) => res.send('novo cliente'))
.put((req, res) => res.send('alterar clientes'))
.delete((req,res) => res.send('deletar cliente'))

server.listen(4000, () => console.log('servidor rodando'))
