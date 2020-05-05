(function () {
    'use strict';
    angular.module('templating_app').controller("editEmployeeCtrl", editEmployeeCtrl);

    editEmployeeCtrl.$inject = ['$scope', '$state', '$stateParams','editService', 'deptService'];
    function editEmployeeCtrl($scope, $state, $stateParams, editService, deptService) {
        $scope.genderList = ['Male', 'Female'];
        var dept = [];
        deptService.GetDetails().then(function (response) {
            for (var i = 0; i < response.length; i++){
                var x = response[i];
                dept[i] = x.deptName;
            }
            $scope.deptList = dept;
        }, function (err) {
            toaster.pop("error", err);
            })

        editService.getEmp($stateParams.id).then(function (response) {
            $scope.emp = response;
            }, function (err) {
                toaster.pop("error", err);
            })
      
        $scope.editEmployee = function () {
            editService.editEmp($scope.emp).then(function (response) {
                alert("Successfully updated!!");
                $state.go('home');
            }, function (err) {
                toaster.pop("error", err);
            });
        }
    }
})();