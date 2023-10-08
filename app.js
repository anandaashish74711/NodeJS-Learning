const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

const adminRoutes = require('./router/admin');
const ShopRoutes = require('./router/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(ShopRoutes);

server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
