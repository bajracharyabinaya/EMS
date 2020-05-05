(function () {
    "use strict";

    angular.module("templating_app")
        .service("empService", empService);

    empService.$inject = ['$http', '$q'];

    function empService($http, $q) {

        this.GetAllEmp = function () {
            var request = $http({
                method: 'GET',
                url: 'http://localhost:3375/api/Employee/GetAll'
            });
            return (request
                .then(function success(response) {
                    return (response.data);
                }, function error(response) {
                    return ($q.reject(response.data.message));
                }));

        }

    }
     
})();
