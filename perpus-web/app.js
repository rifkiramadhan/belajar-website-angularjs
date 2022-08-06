angular.module('perpustakaan-app', [])
.controller('my-controller', function ($scope) {
    $scope.hello = "Hello World!";

    var hai  = function (name, age) {
        return "Hello " + name + " Anda berusia " + age;
    };
    var a = hai("Rifki", "23");
    alert(a);

    // Cara lain
    // function hai () {
    //     alert("Hai!");
    // };
});