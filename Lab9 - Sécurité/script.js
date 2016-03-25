$( document ).ready(function() {
    console.log( "ready!" );

    $('#login-btn').click(function(){
        $.ajax({
            type: "POST",
            url: "http://localhost:5000/authorize",
            contentType: "application/json",
            data: JSON.stringify({
                username: $('#username-input').val(),
                password: $('#password-input').val()
            })
        }).success(function(){
            $('#res').text('Login successful');
        }).fail(function(){
            $('#res').text('Failed to login')
        })
    });


});

