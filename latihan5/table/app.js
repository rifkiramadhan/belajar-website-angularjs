var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
   $scope.students = students;

   // Untuk menampung data dropdown
   $scope.pagesizes = [5, 10, 15, 20];

   // Jumlah baris dalam 1 halaman
   $scope.pagesize = $scope.pagesizes[0];

   // Lokasi halaman saat ini
   $scope.currentpage = 0;

   // Jumlah total halaman
   $scope.pagenumber = Math.ceil($scope.students.length / $scope.pagesize);

   $scope.paging = function(type) {
      if (type == 0 && $scope.currentpage > 0) {
         --$scope.currentpage;
      } else if (type == 1 && $scope.currentpage < $scope.pagenumber + 1) {
         ++$scope.currentpage;
      };
   };

   // Akan dieksekuusi ketika ada perubahan pada variable yang kita ingin amati
   $scope.$watchCollection('results', function() {
      if ($scope.results == undefined) {
         return;
      };

      $scope.currentpage = 0;
      $scope.pagenumber = Math.ceil($scope.results.length / $scope.pagesize);
   });

   $scope.changeAction = function(p) {
      $scope.pagesize = p;
      $scope.currentpage = 0;
      $scope.pagenumber = Math.ceil($scope.results.length / $scope.pagesize);
   };

   $scope.ordering = function(ordvar, by) {
      ordvar = !ordvar;
      $scope.ordstatus = ordvar;
      $scope.ord = by;
      return ordvar;
   };

   $scope.getNumber = function(n) {
      return new Array(n);
   };

   $scope.getPage = function(i) {
      $scope.currentpage = i;
   };
});

var students = [{
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
   }, {
    name: 'Marni',
    class: '1A',
    score: 43
   }, {
    name: 'Mina',
    class: '1B',
    score: 42
   }, {
    name: 'Wasmuadi',
    class: '1A',
    score: 46
   }, {
    name: 'Warman',
    class: '1A',
    score: 25
   }, {
    name: 'Winarsih',
    class: '1D',
    score: 46
   }, {
    name: 'Hasbuloh',
    class: '1A',
    score: 41
   }, {
    name: 'Wanabut',
    class: '1C',
    score: 61
   }
]