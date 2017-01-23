var app = require('app');
app.controller("IndexController", ['$scope', function ($scope) {
    $scope.fromController = "Some angular Text";
}]);