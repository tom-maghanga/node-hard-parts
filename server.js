const http = require('http');
const fs = require('fs');
const path = require('path');
function doOnRequest(request, response){
  // Send back a message saying "Welcome to Twitter"
  // code here...
   
  if (request.method === 'GET' && request.url === '/') {
    // read the index.html file and send it back to the client
    // code here...
    const indexPath = path.join(__dirname, 'index.html');
    const fileStream = fs.createReadStream(indexPath)
    response.end(fs.readFileSync('./index.html', 'utf-8'));



  }
  else if (request.method === 'POST' && request.url === '/sayHi') {
    // code here...
    newFile = fs.writeFileSync('hi_log.txt', "", 'utf-8')
    const logPath = path.join(__dirname, 'hi_log.txt');
    fs.appendFileSync(logPath, `Somebody said hi.\n`, 'utf-8')
    response.end("hi back to you!");
  }
  else if (request.method === 'POST' && request.url === '/greeting') {
    // accumulate the request body in a series of chunks
    // code here...
    
  }
  else {
    // Handle 404 error: page not found
    // code here...
    
  }
}

const server = http.createServer(doOnRequest)

server.listen(3000);
