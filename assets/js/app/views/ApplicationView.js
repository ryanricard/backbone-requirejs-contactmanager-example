define(['views/FormView', 'views/ListView'], function(FormView, ListView) {

	var ApplicationView = Backbone.View.extend({
		
		el: $('body'),

		initialize: function(){

			new FormView();
			new ListView();

		}

	});

	return ApplicationView;

});