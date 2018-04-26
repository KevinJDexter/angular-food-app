let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const foodSchema = new Schema ({
  name: {type: String, required: true, unique: true},
  deliciousness_rating: {type: String, required: true},
  is_hot: {type: String, required: true}
})

module.exports = mongoose.model('foods', foodSchema);