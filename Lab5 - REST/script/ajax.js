/*
function ajaxConnection(url){
    this.url = url;
    this.contentType = 'application/json';
    this.createTask(data){

    }
}*/

$('#plus-button').click(function(){
    $.ajax({
        url : 'localhost:5000/tasks',
        type : 'POST',
        data : JSON.stringify($('#input-box').textContent),
        contentType : 'application/json'
    }).done(function(){
        $('#input-box').text = "";
    });
});