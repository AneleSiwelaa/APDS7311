//console.log('This school is sh*t!n')

import http from "http";

//set the port
const PORT = 3000;
//start the server
const server = http.createServer((req,res)=>{
    res.end('I am crying less because of this school')
})
server.listen(PORT)