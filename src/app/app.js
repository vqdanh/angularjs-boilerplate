import MainModule 			from './MainModule';

export default angular
	.module('baycare-app', [
		MainModule.name
	])
	.run(() => {
    console.debug("Starting the 'baycare-app' module");
  });
