$(document).ready(function() {
    // Table Filtering (Animals Page)
    $('#search-bar').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('#animal-table tbody tr').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // Ticket Purchase Form Validation (tickets.html)
    $('#ticket-form').submit(function(event) {
        event.preventDefault(); // Prevent form submission

        var name = $('#name').val();
        var tickets = $('#tickets').val();

        if (!name || !tickets) {
            alert("Please fill out both fields!");
        } else {
            alert("Thank you, " + name + ". You have purchased " + tickets + " ticket(s).");
        }
    });

    // Contact Form Validation (contact.html)
    $('#contact-form').submit(function(event) {
        event.preventDefault(); // Prevent form submission

        var email = $('#email').val();
        var message = $('#message').val();

        if (!email || !message) {
            alert("Please fill out all fields!");
        } else {
            alert("Your message has been sent successfully.");
        }
    });
});
