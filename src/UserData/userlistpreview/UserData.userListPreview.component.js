(function() {
	'use strict';
angular.module('UserData')
.component('userListPreview', {
	templateUrl: 'src/UserData/userlistpreview/userListPreview.html',
	controller: userListPreviewController
})

function userListPreviewController(UserCardService) {
	this.usersData = UserCardService.usersData;
	console.log(this.usersData)
}
})();
