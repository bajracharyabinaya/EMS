templatingApp.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$compileProvider',
    function ($locationProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $compileProvider) {

        //console.log('Appt.Main is now running')
        if (window.history && window.history.pushState) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            }).hashPrefix('!');
        };
        $urlMatcherFactoryProvider.strictMode(false);
        $compileProvider.debugInfoEnabled(false);

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/employees/main.html',
                controller: 'EmployeeCtrl'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: './views/employees/main.html',
                controller: 'EmployeeCtrl'
            });

        $urlRouterProvider.otherwise('/home');
    }]); 
