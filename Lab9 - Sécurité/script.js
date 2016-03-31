$(document).ready(function () {
        var token = Cookies.get('login');

        if (token) {
            $('#login').hide();
            $('#page-title').text('Profile');
            getProfile();
        } else {
            $('#userprofile').hide();
        }

        function getProfile() {
            $.ajax({
                type: "GET",
                url: "http://localhost:5000/userprofile?token=" + token,
                contentType: "application/json",
                authorization: token
            }).success(function (data) {
                $('#login').hide();
                $('#page-title').text('Profile');
                $('#username').text(data.username);
                $('#email').text(data.email);
                $('#userprofile').show();
            }).fail(function () {
                console.log('fail');
            });
        }

        $('#login-btn').click(
            function () {
                $.ajax({
                    type: "POST",
                    url: "http://localhost:5000/authorize",
                    contentType: "application/json",
                    data: JSON.stringify({
                        username: $('#username-input').val(),
                        password: btoa($('#password-input').val()) //Encode en base64
                    })
                }).success(function (data) {
                    Cookies.set('login', data.token);
                    token = data.token;
                    getProfile();
                    $('#username-input').val('');
                    $('#password-input').val('');
                    $('#result').text('');
                }).fail(function () {
                    $('#result').text('Login fail');
                });
            });

        $('#logout-btn').click(function () {
            Cookies.remove('login');
            $('#userprofile').hide();
            $('#page-title').text('Login');
            $('#login').show();
        })
    }
);
