(function() {
	'use strict';
	angular.module('myApp')
	.config(RouterConfig)

RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RouterConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/login');

		$stateProvider
		.state('start', {
			// url: '/',
			template: `<wrapper-element></wrapper-element>`
		})
		.state('login', {
			url: '/login',
			// parent: 'start',
			template: `<login username = "ctrl.username" email = "ctrl.email" 
			password = "ctrl.password" show-spinner = "ctrl.showSpinner" 
			check-credentials = "ctrl.checkCredentials(email, password)"
			login-response = "ctrl.loginResponse" show-login-response ="ctrl.showLoginResponse"></login>`,
			controller: 'LoginController as ctrl'

		})
		.state('success', {
			template:`<div class="greeting-container">
			<div class="alert alert-info">Welcome back, <b>{{success.username}}</b>! 
			Redirecting...</div>
			</div>`,
			parent: 'start',
			 params: {
        email: null,
        password: null
                },
                controller: 'SuccessController as success',
      onEnter: function($state, $timeout) {
      $timeout(()=>{$state.go('inbox')},3000)
      
    },
      resolve: {
        username: ['AccessControl', function(AccessControl) {
        	return AccessControl.getCurrentUser().username
        }]
    },
		})
		.state('loginfailure', {
			template: ``,
			parent: 'login'
		})
		.state('users', {
			url: '/users',
			parent:'start',
			template: ` <user-list random-user="userCtrl.randomUser"></user-list> `,
			resolve: {
				randomUser: ['UserCardService', function(UserCardService) {
					return UserCardService.getRandomUser().then((response) => {console.log(response);})
				}]
			},
			controller: 'UserController as userCtrl'
		})

		.state('mails', {
			abstract: true,
			parent:'start',
			template: `<mailbox></mailbox>`
		})

	}
})();