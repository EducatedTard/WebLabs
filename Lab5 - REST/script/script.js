var tasks;


function updateDisplay(data) {
    var newline = document.createElement('tr');
    var newElementId = document.createElement('td');
    var newElementTask = document.createElement('td');
    newElementId.innerHTML = data.id;
    newElementTask.innerHTML = data.task;
    newline.appendChild(newElementId);
    newline.appendChild(newElementTask);
    document.getElementById('all-notes').appendChild(newline);
}

function updateTasks() {
    $.ajax({
            url: 'http://localhost:5000/tasks',
            contentType: 'application/json; charset=UTF-8',
            type: 'GET'
        })
        .done(function (data) {
            tasks = data.tasks;
            document.getElementById('all-notes').innerHTML = "";
            for (var i = 0; i < tasks.length; i++) {
                updateDisplay(tasks[i]);
            }
        })
        .fail(function (jqXHR, textStatus) {

        });
}

/*
 * delete!!!!!!!!!!
 */
$('#delete-button').click(function () {
    $.ajax({
            context: this,
            url: 'http://localhost:5000/tasks/' + $('#input-id-2').val(),
            contentType: 'application/json; charset=UTF-8',
            type: 'DELETE',
            data: {"approved": "True"}
        })
        .done(function (data) {
        })
        .fail(function (jqXHR, textStatus) {
            alert("This id does not exist.")
        });
    updateTasks();
});


/*
 * Change a painful task into an other one !
 */
$('#plus-button-2').click(function () {
    var task = {
        "task": $('#input-task').val(),
        "id": $('#input-id').val()
    }
    $.ajax({
            url: 'http://localhost:5000/tasks/' + $('#input-id').val(),
            contentType: 'application/json; charset=UTF-8',
            type: 'PUT',
            data: JSON.stringify(task)
        })
        .done(function (data) {
        })
        .fail(function (jqXHR, textStatus) {
            alert("This id does not exist.")
        });
    updateTasks();
});

/*
 * Add a painful task that will never be done !
 */
$('#plus-button').click(function () {
    var task = {
        "task": $('#input-box').val()
    }

    $.ajax({
            url: 'http://localhost:5000/tasks',
            contentType: 'application/json; charset=UTF-8',
            type: 'POST',
            data: JSON.stringify(task)
        })
        .done(function (data) {
        })
        .fail(function (jqXHR, textStatus) {
            alert("Server is not responding.")
        });
    updateTasks();
});
updateTasks();