var templatingApp; !function () {
    "use strict"; templatingApp = angular.module("templating_app", ["ui.router"])
}(),
    templatingApp.config(["$locationProvider", "$stateProvider", "$urlRouterProvider", "$urlMatcherFactoryProvider", "$compileProvider",
        function (e, t, o, r, l) {
            window.history && window.history.pushState && e.html5Mode({ enabled: !0, requireBase: !0 }).hashPrefix("!"),

                r.strictMode(!1), l.debugInfoEnabled(!1),
                t.state("home", {
                    url: "/",
                    templateUrl: "./app/views/employee/main.html",
                    controller: "EmployeeController"
                })
                    .state("dashboard", {
                        url: "/dashboard",
                        templateUrl: "./app/views/employee/main.html",
                        controller: "EmployeeController"
                    })
                    .state("user", {
                        url: "/addEmployee",
                        templateUrl: "./app/views/employee/addEmployee.html",
                        controller: "addEmployeeCtrl"
                    }),
                o.otherwise("/home")
        }]);