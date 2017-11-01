(function () {
    "use strict";

    angular.module('PhoenixKata').controller('ListController', ListController);

    ListController.$inject = ['$http', '$location'];

    function ListController($http, $location) {
        var vm = this;
        vm.goToPage = function() {
            $location.path('detail');
        }

        vm.table1 = {
            name: "Mark Quinn",
            phoneNo: "0782537383",
            noOfDiners: 1,
            tableNumber: 1,
            bookingTime: new Date(),
        };

        function getBookings() {
            $http.get("booking").then(function (response) {
                vm.bookings = response.data;
            });
        }

        getBookings();
    }
})();