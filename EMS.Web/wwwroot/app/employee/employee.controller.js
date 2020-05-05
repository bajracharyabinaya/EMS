(function () {
    'use strict';
    angular.module('templating_app').controller("EmployeeController", EmployeeController);

    EmployeeController.$inject = ['$scope', '$state', 'empService', 'popupService', 'deleteService'];
    function EmployeeController($scope, $state, empService, popupService, deleteService) {
        $scope.message = "All Employee Details";
        empService.GetAllEmp().then(function (response) {
            $scope.empList = response;
        }, function (err) {
            toaster.pop("error", err);
            })
        $scope.delete = function (emp) {
            if (popupService.showPopup('Do you really want to delete this?')) {

                deleteService.deleteEmp(emp).then(function (response) {
                    alert("Successfully deleted");
                    empService.GetAllEmp().then(function (response) {
                        $scope.empList = response;
                    }, function (err) {
                        toaster.pop("error", err);
                    })
                }, function (err) {
                    toaster.pop("error", err);
                });
            }
        }
    }
})();