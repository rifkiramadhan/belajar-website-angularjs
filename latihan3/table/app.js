var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
   $scope.ordering = function(ordvar, by) {
      ordvar = !ordvar;
      $scope.ordstatus = ordvar;
      $scope.ord = by;
      return ordvar;
   };

   $scope.students = [{
    name: 'Jajang',
    class: '1A',
    score: 40
   }, {
    name: 'Saepudin',
    class: '1A',
    score: 43
   }, {
    name: 'Suhendar',
    class: '1B',
    score: 57
   }, {
    name: 'Karsono',
    class: '1B',
    score: 32
   }, {
    name: 'Darsum',
    class: '1B',
    score: 60
   }, {
    name: 'Nono',
    class: '1B',
    score: 51
   }, {
    name: 'Dianto',
    class: '1C',
    score: 51
   }, {
    name: 'Yadi',
    class: '1C',
    score: 40
   }, {
    name: 'Wasna',
    class: '1C',
    score: 43
   }]
});