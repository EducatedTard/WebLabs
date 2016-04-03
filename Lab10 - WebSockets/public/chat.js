  var pseudo;
  var socket = io.connect();

  $('#identificationButton').click(function() {
    pseudo = $('#nameInput').val() || 'Utilisateur';
    $('#identificationBox').hide();
    $('#messagesSection').show();
  });

  $('#sendMessageButton').click(function() {
    var message = $('#messageInput').val();
    socket.emit('newMessage', { 'pseudo' : pseudo, 'message' : message });
    appendMessage(message, pseudo);
    $('#messageInput').val('');
  });
 
  socket.on('getMessages', function (messages) {
    $('#chatBox').empty();
    for (var i = 0; i < messages.length; i++) {
        appendMessage(messages[i].message, messages[i].pseudo);
    }
  });

  socket.on('getMessage', function (message) {
    appendMessage(message.message, message.pseudo);
  });

  function appendMessage(message, pseudo) {
    $('#chatBox').append($('<div></div>').addClass('line').html('<span class="label label-primary">' + pseudo + '</span> : ' + message));
  }