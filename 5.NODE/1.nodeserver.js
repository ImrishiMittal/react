// const http = require('http');
// const server = http.createServer((req,res)=>{
//     console.log(req);
// })
// server.listen(3001,()=>{
//     console.log(`Serever is running`)
// })

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`User visited ${req.url}`);
    
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Tell browser it's plain text
    res.end('Hello from your first Node.js server!');
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
