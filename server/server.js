const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 5000;

const kitchenDatabase = require('./modules/kitchen-database');

const foodRouter = require('./routes/food.router');

const foodSchema = require('./models/food.schema');

app.listen(PORT, () => {
  console.log('Now running on port', PORT);
});

app.use('/food', foodRouter);

// app.post('/food', (req, res) => {
//   console.log(req);
//   res.sendStatus(201)
// })

