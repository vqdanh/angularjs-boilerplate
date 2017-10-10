import 'angular-spinners';

import SideNavbar							from './shared/side-navbar/side-navbar-directive';
import HeaderDirective				from './shared/header/header-directive';
import FooterDirective				from './shared/footer/footer-directive';

export default angular
	.module('app.component', [
		"angularSpinners"
	])
	.directive('sideNavbar', SideNavbar)
	.directive('header', HeaderDirective)
	.directive('footer', FooterDirective)

	.config(() => {
		"ngInject";
		
  })

	.run(() => {
    console.debug("Starting the 'app.component' module");
  });