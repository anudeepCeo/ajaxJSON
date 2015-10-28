$(document).ready(function() {
  
  var count = $('.data').size();
  var lineVal = $('.data>li').text();
  
  function dataPolling() {
    setInterval(function() {
      $.ajax({
        url:'data.json',
        type:'GET',
        dataType:'json',
        success: function(data) {
          var dataCount = data.length;
          for(var i = 0; i < dataCount; i++) {
            var num = data[i].id;
            var txt = data[i].text;
            if(count !== dataCount) { //Performs change only when count differs from both documents.
              if(lineVal !== txt) {
                $('.data>li').remove();
                $('.data').append('<li id='+ num +'>'+ txt +'</li>');
              }
            } else { //Else if count equals checks the val of the elements are equal to to json data or not, if not equal it changes.
              if(lineVal !== txt) {
                $('.data>li').remove();
                $('.data>li').text(txt);
              }
            }
          }
        },
        error: function(err) {
          console.log(err);
        }
      });
    },500);
  }
});
