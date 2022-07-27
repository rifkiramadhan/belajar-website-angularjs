var app = angular.module('xapp', []);

app.controller('xctrl', function($scope) {
    $scope.operate = function(code) {
        var a = +$scope.obj1;
        var b = +$scope.obj2;

        switch (code){
            case 1: 
                $scope.operation = "ADD";
                $scope.result = a + b; 
                break;
            case 2: 
                $scope.operation = "SUBSTRATION"; 
                $scope.result = a - b;
                break;
            case 3: 
                $scope.operation = "MULTIPLY"; 
                $scope.result = a * b;
                break;
            case 4: 
                $scope.operation = "DIVIDE"; 
                $scope.result = a / b;
                break;
        };
    };
});