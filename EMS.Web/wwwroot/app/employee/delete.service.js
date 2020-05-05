(function () {
    "use strict";

    angular.module("templating_app")
        .service("deleteService", deleteService);

    deleteService.$inject = ['$http', '$q'];

    function deleteService($http, $q) {
        var service = {
            deleteEmp: deleteEmp
        }
        return service;
        function deleteEmp(emp) {
            var config = {
                headers: { 'Content-Type': "application/json" }
            };
            var request ={
                    EmpId: emp.empId,
                    FirstName: emp.firstName,
                    LastName: emp.lastName,
                    Address: emp.address,
                    Phone: emp.phone,
                    Gender: emp.gender,
                    DeptName: emp.deptName
                 };
          
            var deferred = $q.defer();

            $http.post('http://localhost:3375/api/Employee/deleteEmployee', request, config)
                .then(function success(response) {
                    deferred.resolve(response);
                }, function error(response) {
                     deferred.reject(err);
                });
            return deferred.promise;
        };

    }

})();