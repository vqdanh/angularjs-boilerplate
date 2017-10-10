import UtilsService					from './UtilsService';
import LoginService					from './LoginService';

export default angular.module('app.service', [])
	.service('UtilsService', UtilsService)
	.service('LoginService', LoginService)
	.run(() => {
    console.debug("Starting the 'app.service' module");
  });