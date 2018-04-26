const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const kitchenDatabase = require('./modules/kitchen-database');

const foodRouter = require('./routes/food.router');

const foodSchema = require('./models/food.schema');

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('Now running on port', PORT);
});

app.use('/food', foodRouter);