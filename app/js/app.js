var app = angular.module('ngViewEffects', [
	'ngRoute',
	'ngAnimate',
    'ngStorage'
]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/page/:pageId', {
            controller: 'pageController',
            templateUrl: function(params) {
                return 'views/page' + params.pageId + '.html';
            }
        })
       .when('/surveys', {
            controller: 'surveyController',
            templateUrl: function(params) {
                return 'views/surveys.html';
            }
        })
        .otherwise({
        	redirectTo: '/page/1'
        });
});

app.service('userService', function(){

    this.username = '';
    this.response1 = '';
    this.response2 = '';
    this.response3 = '';

    return this;
    
});