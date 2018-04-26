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
      console.log('caught error on /food GET:', error);
      res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
  console.log(req.body);
  Foods.create(req.body)
    .then((response) => {
      res.sendStatus(201);
    })
      .catch ((error) => {
        console.log('caught error on /food POST:', error);
        res.sendStatus(500);
      })
});

router.delete('/', (req, res) => {
  Foods.findByIdAndRemove(req.query._id)
    .then((response) => {
      res.sendStatus(202);
    })
    .catch((error) => {
      console.log('caught error on /food DELETE', error);
      res.sendStatus(500);
    })
})

router.put('/', (req, res) => {
  Foods.findByIdAndUpdate(req.body._id, req.body)
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('caught error on /food PUT');
      res.sendStatus(500);
    })
})

// router.post('/', (req, res) => {
//   foods.push(req.body);
//   res.sendStatus(201);
// })

module.exports = router;