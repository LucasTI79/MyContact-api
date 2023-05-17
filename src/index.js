const express = require('express');
const errorHandler = require('./app/middlewares/errorHandler');
require('express-async-errors');

const router = require('./routes');

const app = express();
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(3000, () => console.log('app listening in http://localhost:3000'));
