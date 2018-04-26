console.log('javascript');

const app = angular.module('FoodApp', []);

const controller = app.controller('FoodController', ['$http', function ($http) {
  var self = this;

  self.foodHeading = 'Enter a new food';
  self.foods = [];
  self.isHotOptions = [true, false];


  self.newFood = {};


  self.submit = function () {
    $http({
      method: 'POST',
      url: '/food',
      data: self.newFood
    })
      .then(function (response) {
        console.log(response.data)
        self.getFoods();
      })
      .catch(function (error) {
        console.log('error on /food POST', error);
      })
  };

  self.getFoods = function () {
    $http({
      method: 'GET',
      url: '/food'
    })
      .then(function (response) {
        console.log(response.data);
        self.foods = response.data;
      })
      .catch(function (error) {
        console.log('error on /food GET', error);
      })
  }

  self.deleteItem = function (food) {
    $http({
      method: 'DELETE',
      url: '/food',
      params: food
    })
      .then(function (response) {
        console.log(response);
        self.getFoods();
      })
      .catch(function (error) {console.log(error)});
  }

  self.updateItem = function (food) {
    $http({
      method: 'PUT',
      url: '/food',
      data: food
    })
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {console.log(error)})
  }

  self.getFoods();
}])