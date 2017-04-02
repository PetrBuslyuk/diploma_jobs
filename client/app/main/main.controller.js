;(function () {
    angular.module('myApp')
        .controller('mainController', mainController);

    mainController.$inject = ['$scope'];

    function mainController($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    }
})();