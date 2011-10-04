define(['model/Contact', 'collections/Contacts'], function(Contact, Contacts) {
	
	var FormView = Backbone.View.extend({

		model: Contact,
		collection: Contacts,
		
		el: $('form#contact-form'),
		
		events: {
			'submit': 'save'
		},

		initialize: function(){

			_.bindAll(this, 'add', 'edit');

			Application.router.bind('route:addContact', this.add);
			Application.router.bind('route:editContact', this.edit);

		},

		save: function(e){
			
			e.preventDefault();
			
			var $form = $(this.el);
			var id = $form.data('id');

			if(!id){

				this.collection.create({
					firstName: $form.find('input#firstName').val(),
					lastName: $form.find('input#lastName').val(),
					email: $form.find('input#email').val()
				});

			}
			else{

				var contact = this.collection.get(id);

				contact.set({
					firstName: $form.find('input#firstName').val(),
					lastName: $form.find('input#lastName').val(),
					email: $form.find('input#email').val()
				});

				contact.save();

				$form.data('id', '');

			}

			Application.router.navigate('contact/add', true);

		},

		edit: function(id){

			this.alterHeader('Edit Contact');

			var contact = this.collection.get(id);

			var $form = $(this.el);

			$form.data('id', id);
			$form.find('input#firstName').val(contact.get('firstName')),
			$form.find('input#lastName').val(contact.get('lastName')),
			$form.find('input#email').val(contact.get('email'))
			$form.find(':input').first().focus();

			Application.router.navigate('contact/edit/' + id, true);

		},

		add: function(){

			var $form = $(this.el);

			this.alterHeader('Add Contact');

			$form.find(':input').not(':button, :submit').val('');

			$form.find(':input').first().focus();

		},

		alterHeader: function(text){
			
			var $header = $('h4', this.el);

			if(!$header.length){
				$header = $('<h4/>');
				$header.html(text);
				$(this.el).prepend($header);
			}
			else{
				$header.html(text);
			}

		}
		
	});
	
	return FormView;

});