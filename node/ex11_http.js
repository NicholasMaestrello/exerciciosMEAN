const http = require('http')
const server = http.createServer( function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end('<h1>nada bom escrever desse jeito</h1>')
})

const porta = 1234
server.listen(porta, function(){
  console.log(`executando na porta ${porta}`)
})
