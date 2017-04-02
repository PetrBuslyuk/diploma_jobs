;(function () {
    angular.module('myApp')
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('main', {
                    url: '/',
                    templateUrl: 'app/main/main.html'
                });

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });


        });
})();