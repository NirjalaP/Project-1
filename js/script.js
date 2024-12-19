$(document).ready(function() {
        // Table Filtering (Animals Page)
        // $('#search-bar').on('input', function(e) {
        //     const searchTerm = e.target.value.toLowerCase();
        //     $('.animal-card').each(function() {
        //         const animal = $(this).data('animal').toLowerCase();
        //         const habitat = $(this).data('habitat').toLowerCase();
        //         const region = $(this).data('region').toLowerCase();
    
        //         if (
        //             animal.includes(searchTerm) ||
        //             habitat.includes(searchTerm) ||
        //             region.includes(searchTerm)
        //         ) {
        //             $(this).show(); // Show the card
        //         } else {
        //             $(this).hide(); // Hide the card
        //         }
        //     });
        // });

    // Ticket Purchase Form Validation (tickets.html)
    $('#ticket-form').submit(function(event) {
        event.preventDefault(); // Prevent form submission
    
        var isValid = true;
    
        // Validate each field
        $('#name, #email, #tickets, #date').each(function() {
            var field = $(this);
            var fieldValue = field.val().trim();
    
            if (!fieldValue) {
                field.addClass('is-invalid');
                isValid = false;
            } else {
                field.removeClass('is-invalid');
                field.addClass('is-valid');
            }
        });
    
        // Additional specific validation
        var email = $('#email').val().trim();
        var tickets = $('#tickets').val().trim();
    
        // Check for valid email format
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email && !emailRegex.test(email)) {
            $('#email').addClass('is-invalid');
            isValid = false;
        }
        
        if (isValid) {
            // Collect field values
            var name = $('#name').val().trim();
            var tickets = $('#tickets').val().trim();
            var date = $('#date').val().trim();
            var email = $('#email').val().trim();
    
            // Show success alert
            alert("Thank you, " + name + ". You have successfully purchased " + tickets + " ticket(s) for " + date + ". A verification mail has been sent to " + email + ".");
        } 
        // else {
        //     alert("Please fill out all fields correctly!");
        // }
    });
    
    // Contact Form Validation (contact.html)
    $('#contact-form').submit(function(event) {
        event.preventDefault(); // Prevent form submission
    
        var isValid = true;
    
        // Validate each field
        $('#name, #email, #message').each(function() {
            var field = $(this);
            var fieldValue = field.val().trim();
    
            if (!fieldValue) {
                field.addClass('is-invalid');
                isValid = false;
            } else {
                field.removeClass('is-invalid');
                field.addClass('is-valid');
            }
        });
    
        // Additional specific validation
        var email = $('#email').val().trim();
    
        // Check for valid email format
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email && !emailRegex.test(email)) {
            $('#email').addClass('is-invalid');
            isValid = false;
        }
        
        if (isValid) {
            // Collect field values
            var name = $('#name').val().trim();
            var message = $('#message').val().trim();
            var email = $('#email').val().trim();
    
            // Show success alert
            alert("Thank you, " + name + ". Your message has been successfully recieved");
        } 
    });
});

