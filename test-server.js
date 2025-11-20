const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
    <html>
      <body style="font-family: Arial; padding: 50px;">
        <h1 style="color: green;">✅ Node.js is Working!</h1>
        <p>Time: ${new Date().toLocaleString()}</p>
        <p>URL: ${req.url}</p>
        <p style="color: blue;">If you can see this, Node.js HTTP server works fine.</p>
      </body>
    </html>
  `);
});

server.listen(3333, '0.0.0.0', () => {
  console.log('🎉 Test server running at:');
  console.log('- http://localhost:3333');
  console.log('- http://127.0.0.1:3333');
  console.log('- http://0.0.0.0:3333');
});

server.on('error', (err) => {
  console.error('❌ Server error:', err);
});