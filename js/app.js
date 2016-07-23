angular.module('start', ['ui.router','squareCtrl'])
.config(function($stateProvider,$urlRouterProvider,$httpProvider){
	$httpProvider.defaults.withCredentials = true;

	$stateProvider
		.state('squareTab',{
			url: '/squareTab',
			templateUrl: 'templates/squareTab.html',
		})
		.state('squareTab.square',{
			url: '/square',
			templateUrl: 'templates/square.html',
			controller: 'squareCtrl'
		})
		.state('squareTab.signed',{
			url:'/signed',
			templateUrl: 'templates/signed.html',
			controller: 'signedCtrl'
		});
		// .state('club',{
		// 	url: '/club',
		// 	templateUrl: 'templates/club.html',
		// 	controller: 'clubCtrl'
		// })
		// .state('person',{
		// 	url: '/person',
		// 	templateUrl: 'templates/person.html',
		// 	controller: 'personCtrl'
		// });

	$urlRouterProvider.otherwise('/squareTab');
});