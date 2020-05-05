(function () {
    "use strict";
    angular.module('templating_app').directive("navbarMenu",
        function () { return { restrict: "E", templateUrl: "app/shared/navbar/nav.html" } })
})();