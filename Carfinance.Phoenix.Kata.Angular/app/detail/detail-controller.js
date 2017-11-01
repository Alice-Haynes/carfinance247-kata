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

            // ifs and that in here?

            // .success(function (data, status, headers, config) {
            // vm.save = function () {
            //    $location.path('list');
            // })
           
            // .error(function (data, status, header, config) {
            // });
            // return errors from tests
        }

    }
})();