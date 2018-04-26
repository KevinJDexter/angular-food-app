console.log('javascript');

const app = angular.module('FoodApp', []);

const controller = app.controller('FoodController', function () {
  var self = this;

  self.foodHeading = 'I love food!';
})