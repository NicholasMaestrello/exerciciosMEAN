process.stdout.write('como voce esta ? \n')
process.stdin.on('data', function(data) {
  process.stdout.write(`Sua resposta foi \n ${data.toString()} obrigado`)
  process.exit()
})
