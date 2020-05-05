(function () {
    "use strict";
    angular.module('templating_app').directive("sidebarMenu",
        function () { return { restrict: "E", templateUrl: "app/shared/sidebar/menu.html" } })
})();