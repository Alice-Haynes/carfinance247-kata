angular.module('PhoenixKata').config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/list/list.html"
    })
    .when("/detail", {
        templateUrl: "app/detail/detail.html"
    })
});