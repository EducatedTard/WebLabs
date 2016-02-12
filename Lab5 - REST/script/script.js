var tasks = $("<div>", {class: "task"});

$('#plus-button').click(function () {


    var task = {
        "task": $('#input-box').val()
    }

    $.ajax({
        url: 'http://localhost:5000/tasks',
        contentType: 'application/json; charset=UTF-8',
        type: 'POST',
        data: JSON.stringify(task),
        success: function (data) {
            $('#input-box').val('');
        }
    });


    $.ajax({
        url: 'http://localhost:5000/tasks',
        contentType: 'application/json; charset=UTF-8',
        type: 'GET',
        success: function (data) {
            tasks.html(data);
            $("#tasks").append(tasks);
        }
    })
});