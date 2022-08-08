var myController = function ($scope) {

};

var bookCtrl = function ($scope) {
    $scope.page = "Book Page";
};

var perpustakaanConfig = function ($stateProvider, $urlRouterProvider) {
    
    var myState = {
        home: {
            name: 'home',
            url: '/',
            template: '<h1>This is Home</h1>'
        },
        about: {
            name: 'about',
            url: '/about',
            template: '<h1>About Page</h1>'
        },
        author: {
            name: 'author',
            url: '/author',
            templateUrl: 'template/author.html'
        },
        book: {
            name: 'book',
            url: '/book',
            templateUrl: 'template/book.html',
            controller: 'book-ctrl'
        }
    };

    $stateProvider
        .state(myState.home)
        .state(myState.about)
        .state(myState.author)
        .state(myState.book);
    
    // Jika tidak ada yg sesuai dgn halaman yang tersedia maka arahkan ke home
    $urlRouterProvider
        .otherwise("/");
};

// ui.router adalah dependency luar yg dimasukkan ke module angular
angular.module('perpustakaan-app', ["ui.router"])
.config(perpustakaanConfig)
.controller('my-controller', myController)
.controller('book-ctrl', bookCtrl);