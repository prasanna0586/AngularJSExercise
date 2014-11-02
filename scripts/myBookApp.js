var myBookApp = angular.module('myBookApp', ['ngRoute']);
	
myBookApp.config(function ($routeProvider){
	$routeProvider
	.when('/login',
	{
		controller: 'LoginController',
		templateUrl: 'Login.html'
	})
	.when('/feed',
	{
		controller: 'FeedController',
		templateUrl: 'Feed.html'
	})
	.when('/profile',
	{
		controller: 'ProfileController',
		templateUrl: 'Profile.html'
	})
	.otherwise({redirectTo: '/'});
});