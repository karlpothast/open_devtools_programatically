const { exec } = require('child_process');
const http = require('http');
const _port = 9229;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type':'application/json'
  };

  if (url === '/' && method === 'GET') {
    res.writeHead(200, headers);
    exec('xdotool getactivewindow key ctrl+shift+i', (err) => {
    });

    const responseData = {
      message:"XDO Command Sent Successfully",
    }
    
  const jsonContent = JSON.stringify(responseData);
  res.end(jsonContent);
  } 
});

server.listen(_port, () => {
  console.log('Server listening at http://localhost:' + _port);
});
