const router = require('express').Router();

let foods = [{
  name: 'Bacon',
  deliciousness_rating: '11/10',
  is_hot: 'no'
}]

router.get('/', (req, res) => {
  res.send(foods)
});

module.exports = router;