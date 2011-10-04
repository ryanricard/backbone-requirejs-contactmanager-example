define(function() {

	var ApplicationRouter = Backbone.Router.extend({

		routes: {
			"contact/add": "addContact",
			"contact/edit/:id": "editContact"
		},

		addContact: function(){

		},
		
		editContact: function(){
		
		}

	});

	return ApplicationRouter;

});