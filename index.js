var outputArea = $("#chat-output");

$("#user-input-form").on("submit", function (e) {

  e.preventDefault();

  var message = $("#user-input").val();
  //exports.input = message;

  outputArea.append('\n<li class="left clearfix admin_chat">\n<div class="chat-body1 clearfix">\n<p>\n<span style="color:rgb(107,203,239); display:block">You</span>\n<span style="display:block; padding:5px 0px 5px 0px;">'+ message +'</span>\n<span style="font-size:0.85em; color:grey; display:block; float:right;">09:40PM</span>\n</p>\n</div>\n</li>\n');
  document.getElementById('user-input').text = '';
  var div = $("#chat_area");
  div.scrollTop(div.prop('scrollHeight'));
  
  $.support.cors = true;
  $.ajax({
                    type: "GET",
                    url: 'http://localhost:3000/input='+message,         
                    dataType: 'text',
                })
          .done(function(data){
            console.log(data);
<<<<<<< HEAD
            outputArea.append('\n<li class="left clearfix partner_chat">\n<span class="chat-img1 pull-left"><img src="robot-face.png" alt="User Avatar" style="background-color: #FF9933;" class="img-circle img-fluid"></span>\n<div class="chat-body2 clearfix">\n<p>\n<span style="color:rgb(107,203,239); display:block">Bot</span>\n<span style="display:block; padding:5px 0px 5px 0px;">'+ data +'</span>\n<span style="font-size:0.85em; color:grey; display:block; float:right;">09:40PM</span>\n</p>\n</div>\n</li>\n');
=======
            outputArea.append('\n<li class="left clearfix partner_chat">\n<span class="chat-img1 pull-left"><img src="https://cdn.dribbble.com/users/722835/screenshots/4082720/bot_icon.gif" alt="User Avatar" class="img-circle"></span>\n<div class="chat-body1 clearfix">\n<p>\n<span style="color:rgb(107,203,239); display:block">Bot</span>\n<span style="display:block; padding:5px 0px 5px 0px;">'+ data +'</span>\n<span style="font-size:0.85em; color:grey; display:block; float:right;">09:40PM</span>\n</p>\n</div>\n</li>\n');
>>>>>>> 3e47a7f31a9d206a09eea6f2f0240adfc897ccba
          });          
  

  $("#user-input").val("");

});