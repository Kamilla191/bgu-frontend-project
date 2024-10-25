const http = require('http');

const server = http.createServer((req, res) => {
	res.write('Hello world!')
	res.end()
})

server.listen(3010, () => {
	console.log('Server running on port 3010')
})
