module.exports = function(exampleService) {

    function examplePage(req, res, next) {
        exampleService.getExampleText(function (err, exampleText) {
            if (err) return next(err);
            res.render('example', exampleText);
        });
    }

	return {
        examplePage: examplePage
	};
};