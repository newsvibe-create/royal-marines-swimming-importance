const http = require('http');
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '07-swimming-importance.html');
const html = fs.readFileSync(file);
http.createServer((req, res) => { res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); res.end(html); }).listen(process.env.PORT || 3000);
