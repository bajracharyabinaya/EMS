(function () {
    "use strict";
    angular
    .module('templating_app')
    .config(function ($stateProvider, $httpProvider) {
        $stateProvider.state("home", {
            url: "/",
            templateUrl: "./app/views/employee/main.html",
            controller: "EmployeeController"
        })
        .state("dashboard", {
                url: "/dashboard",
                templateUrl: "./app/views/employee/main.html",
                controller: "EmployeeController"
            })
            .state('editEmp', {
                url: '/employee/:id/edit',
                templateUrl: './app/views/employee/editEmployee.html',
                controller: 'editEmployeeCtrl'
            })
        .state("user", {
                url: "/addEmployee",
                templateUrl: "./app/views/employee/addEmployee.html",
                controller: "addEmployeeCtrl"
            });
    }).run(function ($state) {
        $state.go('home');
        })
})();