var Application;

require.ready(function(){
	
	require(['Router', 'views/ApplicationView'], function(Router, ApplicationView) {

		Application = {
			events: {},
			router: {}
		};

		_.extend(Application.events, Backbone.Events);

		Application.router = new Router();

		new ApplicationView();

		//call to begin monitoring uri and route changes
		Backbone.history.start();

		Application.router.navigate('contact/new', true);

	});

});