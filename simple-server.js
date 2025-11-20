const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.url}`);
  
  // Serve the complete HTML file for any request
  const filePath = path.join(__dirname, 'financeflow-complete.html');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading file');
      return;
    }
    
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  });
});

const PORT = 8080;
server.listen(PORT, '0.0.0.0', () => {
  console.log('==========================================');
  console.log('🎉 SERVER IS RUNNING!');
  console.log('==========================================');
  console.log(`📱 Open: http://localhost:${PORT}`);
  console.log(`🌐 Or:   http://127.0.0.1:${PORT}`);
  console.log('==========================================');
});

server.on('error', (err) => {
  console.log('❌ Server error:', err);
});