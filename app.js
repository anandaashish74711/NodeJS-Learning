const http = require('http');
const express=require('express');
const routes=('./routes');
const rexpress= require('express');
const app=express()
const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});