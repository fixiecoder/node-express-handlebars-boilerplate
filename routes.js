module.exports = function(router, controllers) {
	router.get('/', controllers.example.examplePage);
};