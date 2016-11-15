(function() {
	'use strict';
	angular.module('UserData')
		.component('userListPreview', {
			templateUrl: 'src/UserData/components/userlistpreview/userListPreview.html',
			controller: userListPreviewController
		})

	function userListPreviewController(UserCardService) {
		this.usersData = UserCardService.usersData;
		this.searchQuery = '';
		console.log(this.usersData)
	}
})();
