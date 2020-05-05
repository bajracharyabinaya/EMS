(function () {
    "use strict";

    angular.module("templating_app")
        .service("deptService", deptService);

    deptService.$inject = ['$http', '$q'];

    function deptService($http, $q) {

        this.GetDetails = function () {
            var request = $http({
                method: 'GET',
                url: 'http://localhost:3375/api/Department'
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