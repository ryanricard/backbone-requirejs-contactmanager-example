define(['collections/Contacts', 'views/ListItemView'], function(Contacts, ListItemView) {

	var ListView = Backbone.View.extend({
		
		collection: Contacts,

		el: $('table#contact-list'),

		initialize: function(){
			
			_.bindAll(this, 'addAll', 'appendItem'); //otherwise el will not be available on add bind
			
			this.collection.bind('reset', this.addAll, this);
			
			this.collection.bind('add', this.appendItem); // collection event binder

			this.collection.fetch();
			
		},
		
		addAll: function() {

	      this.collection.each(this.appendItem);
			
	    },
		
		appendItem: function(contact){
			
			var listItemView = new ListItemView({
				model: contact
			});
			
			$(this.el).append(listItemView.render().el);
			
		}
		
		
	});
	
	return ListView;

});