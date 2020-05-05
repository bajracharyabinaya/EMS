(function () {
    "use strict";

    angular.module("templating_app")
        .service("editService", editService);

    editService.$inject = ['$http', '$q'];

    function editService($http, $q) {
        var service = {
            editEmp: editEmp,
            getEmp: getEmp
        }
        return service;
        function editEmp(emp) {
            var config = {
                headers: { 'Content-Type': "application/json" }
            };
            var request = {
                EmpId: emp.empId,
                FirstName: emp.firstName,
                LastName: emp.lastName,
                Address: emp.address,
                Phone: emp.phone,
                Gender: emp.gender,
                DeptName: emp.deptName
            };

            var deferred = $q.defer();

            $http.post('http://localhost:3375/api/Employee/updateEmployee', request, config)
                .then(function success(response) {
                    deferred.resolve(response);
                }, function error(response) {
                    deferred.reject(err);
                });
            return deferred.promise;
        }
        function getEmp(id) {
            var request = $http({
                method: 'GET',
                url: 'http://localhost:3375/api/Employee/getEmployee?empId=' + id
            });
            return (request
                .then(function success(response) {
                    return (response.data);
                }, function error(response) {
                    return ($q.reject(response.data.message));
                }));
        };
    }

})();