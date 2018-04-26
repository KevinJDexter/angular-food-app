const router = require('express').Router();
const Foods = require('../models/food.schema');

let foods = [{
  name: 'Bacon',
  deliciousness_rating: '11/10',
  is_hot: 'no'
}]

router.get('/', (req, res) => {
  Foods.find({})
    .then((dataFromDatabase) => {
      res.send(dataFromDatabase);
    })
    .catch((error) => {
      console.log('caught error:', error);
      res.send(500);
    })
});

module.exports = router;