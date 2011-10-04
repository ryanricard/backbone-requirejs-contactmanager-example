define(function() {

	var Contact = Backbone.Model.extend({

		firstName: '',
		lastName: '',
		email: '',

		reverseName: function(){
			return this.get('lastName') + ', '+ this.get('firstName');
		}

	});
	
	return Contact;

});