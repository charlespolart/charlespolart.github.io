!(function ($) {
    "use strict";

    $("#contact-form").submit(function (e) {
        e.preventDefault();

        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        $(this).find('.loading').slideDown();
        sendMail({ name: name, email: email, subject: subject, message: message });
        $(this).find('.loading').slideUp();
        $(this).find('.sent-message').slideDown();
        $('#subject').val('');
        $('#message').val('');
    });

})(jQuery);

function sendMail(form) {
    fetch("https://arq.pw/mailer/contact", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Authorization': ' 92e6deea-c397-4277-8d73-2c371bbcf94d',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "name": form.name, "from": form.email, "subject": form.subject, "message": form.message })
    })
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((err) => console.error(err));
}
