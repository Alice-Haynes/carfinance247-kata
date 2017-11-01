(function () {
    "use strict";

    angular.module('PhoenixKata').controller('DetailController', DetailController);

    DetailController.$inject = ['$http', '$location'];

    function DetailController($http, $location) {
        var vm = this;

        vm.booking = {};

        vm.save = function () {
            $http.post("booking", vm.booking).then(function () {
                $location.path('/');
            }, function () {
            });

            
        }

    }
})();