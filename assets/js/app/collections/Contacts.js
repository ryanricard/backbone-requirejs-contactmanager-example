define(['model/Contact', 'utils/LocalStorageUtil'], function(Contact, LocalStorageUtil) {

	var Contacts = Backbone.Collection.extend({

		model: Contact,
		
		localStorage: new LocalStorageUtil("contacts")
		
	});
	
	return new Contacts();

});