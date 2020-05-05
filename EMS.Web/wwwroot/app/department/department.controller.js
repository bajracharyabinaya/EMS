(function () {
    'use strict';
    angular.module('templating_app').controller("DepartmentController", DepartmentController);

    DepartmentController.$inject = ['$scope', '$state', 'deptService' ];
    function DepartmentController($scope, $state, deptService) {
        $scope.message = "All Departments";
        deptService.GetDetails().then(function (response) {
            $scope.deptList = response;
         }, function (err) {
           toaster.pop("error", err);
        });

    }
})();