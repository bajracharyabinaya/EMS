(function () {
    "use strict";

    angular.module("templating_app")
        .service("addService", addService);

    addService.$inject = ['$http', '$q'];

    function addService($http, $q) {
        var service = {
            addEmp: addEmp
        }
        return service;
        function addEmp(emp) {
            var config = {
                headers: { 'Content-Type': "application/json" }
            };
            var request = {
                   
                    FirstName: emp.firstName,
                    LastName: emp.lastName,
                    Address: emp.address,
                    Phone: emp.phone,
                    Gender: emp.gender,
                    DeptName: emp.deptName.deptName
            };
           
            var deferred = $q.defer();

            $http.post('http://localhost:3375/api/Employee/addEmployee', request, config)
                .then(function success(response) {
                    deferred.resolve(response);
                }, function error(response) {
                     deferred.reject(err);
                });
            return deferred.promise;
        };

    }

})();