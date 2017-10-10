import ConstantModule 			from './constants/ConstantModule';
export default angular
	.module('app.state', [
		ConstantModule.name
	])
	.config(
		($sceDelegateProvider, $httpProvider, $stateProvider, $urlRouterProvider, STATE) => {
			"ngInject";
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state(STATE.SYSTEM, {
				abstract: true,
				url:"",
				templateUrl: 'src/app/components/system/manage/system-manage-tpl.html',
				controller: 'SystemManageController'
			})
			.state(STATE.APPLICATION, {
				abstract: true,
				url:"",
				templateUrl: 'src/app/components/application/application-component-tpl.html',
				controller: 'ApplicationComponentController'
			})
			.state(STATE.LOGIN, {
				url:"/login",
				templateUrl: 'src/app/components/system/login/login-tpl.html',
				controller:'LoginController'
			})
			.state(STATE.DASHBOARD, {
				url:"/dashboard",
				templateUrl: 'src/app/components/dashboard/dashboard-tpl.html',
				controller:'DashboardController',
				controllerAs:'dashboard',
				data:{}
			});

	})
	.run(() => {
    console.debug("Starting the 'app.state' module");
  });