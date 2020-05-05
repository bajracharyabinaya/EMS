(function () {

    'use strict';

    angular.module('templating_app')
        .service('popupService', popupService)

    popupService.$inject = ['$window'];

    function popupService($window) {

        this.showPopup = function (message) {
            return $window.confirm(message);
        }

    }
})();