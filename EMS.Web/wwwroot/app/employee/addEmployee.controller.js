(function () {
    'use strict';
    angular.module('templating_app').controller("addEmployeeCtrl", addEmployeeCtrl);

    addEmployeeCtrl.$inject = ['$scope', '$state', 'addService', 'deptService'];
    function addEmployeeCtrl($scope, $state, addService, deptService) {
        $scope.emp = { firstName: "", lastName: "", gender: "", address: "", phone:"", deptName:"" };
        $scope.genderList = ['Male', 'Female'];
        deptService.GetDetails().then(function (response) {
            $scope.deptList = response;
        }, function (err) {
            toaster.pop("error", err);
        })
        $scope.addEmployee = function () {
            addService.addEmp($scope.emp).then(function (response) {
                alert("Successfully added!!");
                $state.go('home');
                }, function (err) {
                    toaster.pop("error", err);
                });
        }
    }
})();