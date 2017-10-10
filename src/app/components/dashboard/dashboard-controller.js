 "use strict";
export default DashboardController;

function DashboardController($rootScope, $scope, $state, $stateParams, $cookies, $location, $timeout, Split, GlobalCache, STATE, EVENT, COOKIE, COMMON) {
	"ngInject";

	let viewState, viewName = "dashboarb";

	$timeout(function(){
		onStart();
	}, 300);

	function onStart(){
		
	}

}
