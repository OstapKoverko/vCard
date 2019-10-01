$(function() {
    $('#submit').click(function(e)  {
        e.preventDefault();
        $.ajax( {
            url: "https://formspree.io/tank302@gmail.com",
            method: "POST",
            data: {email: $('#email').val(),
                    message: $('#message').val()
        },
        dataType: "json"
    }).done(function() {
        $('#contact-form').html('<h4>Thank you! I will answer you soon!</h4>')
    });
});
});