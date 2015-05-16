module.exports = function() {

    function getExampleText(callback) {
        var exampleText = {
            title: "NodeJS Express Boilerplate",
            description: "Using handlebars templates"
        }
        callback(null, exampleText);
    }

	return {
        getExampleText: getExampleText
	};
};