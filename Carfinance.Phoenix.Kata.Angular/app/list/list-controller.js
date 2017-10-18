(function () {
    "use strict";

    angular.module('PhoenixKata').controller('ListController', ListController);

    ListController.$inject = ['$http'];

    function ListController($http) {
        var vm = this;
        
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