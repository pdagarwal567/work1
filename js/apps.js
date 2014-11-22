$(function() {

	// Get the form.
	var form = $('#ajax-career');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);
			$(formMessages).fadeOut(3000);


			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#subject').val('');
			$('#mobno').val('');
			$('#message').val('');
			
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
				$(formMessages).fadeOut("3000");
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
				$(formMessages).fadeOut("3000");
			}
		});

	});
	
	//$("#button2").mouseleave(function() { 
      // $("#form-messages").fadeOut("3000");
   //});

});
