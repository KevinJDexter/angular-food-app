const express = require('express');
const app = express();
const PORT = 5000;

const foodRouter = require('./routes/food.router');

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('Now running on port', PORT);
});

app.use('/food', foodRouter);