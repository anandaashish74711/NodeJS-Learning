const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const path=require('path')
const adminData = require('./router/admin');
const ShopRoutes = require('./router/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminData.router);
app.use(ShopRoutes);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
});
server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
