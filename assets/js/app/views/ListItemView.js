define(function() {

	var ListItemView = Backbone.View.extend({
		
		tagName: 'tr',
		
		events: {
			'click td a.edit': 'edit',
			'click td a.remove': 'remove'
		},
		
		initialize: function(){
			_.bindAll(this, 'render', 'unrender'); // every function that uses 'this' as the current object should be in here

			this.model.bind('change', this.render);
			this.model.bind('remove', this.unrender);
	    },

		render: function(){

			$(this.el).html('');

			$(this.el)
				.data('id', this.model.get('id'))
				.addClass('items')
				.append('<td>' + this.model.reverseName() + '</td>')
				.append('<td>' + this.model.get('email') + '</td>')
				.append('<td><a class="btn edit">Edit</a><a class="btn danger remove">Remove</a></td>');
			
			return this; // for chainable calls, like .render().el
			
		},
		
		unrender: function(){
	      $(this.el).remove();
	    },
		
		edit: function(e){

			Application.router.navigate('contact/edit/'+$(e.target).closest('tr').data('id'), true);

		},
		
		remove: function(e){
			this.model.destroy();
		}
		
	});
	
	return ListItemView;

});