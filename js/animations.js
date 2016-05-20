$(document).ready(function() {

  $('.tweet-actions').hide();

  $('#compose-tweet').on('click', function(e) {
    e.stopPropagation();
    $(this).css('height', '5em');
    $('#tweet-controls').show();
  });

  $('html').on('click', function() {
    $('#compose-tweet').css('height', '2.5em');
    $('#tweet-controls').hide();
  });



  //this limits users to 140 charactors, changes the counter color, and changes the button.
  $('#compose-tweet').on('keyup', function() {
    var newCount = $('#compose-tweet').val().length;
    $('#char-count').html(140 - newCount);
    if (newCount >= 130) {
      $('#char-count').css('color', 'red');
    }
    if (newCount < 130) {
      $('#char-count').css('color', '#9C9C9C');
    }
    if (newCount > 140) {
      $('.button').prop('disabled', true);
    }

    if (newCount <= 140) {
      $('.button').prop('disabled', false);
    }
  });


  // this is posting a tweet.
  $('.button').on('click', function() {
    var newCount2 = $('#compose-tweet').val().length;
    var tweetText = $('#compose-tweet').val();

    if (newCount2 > 0) {
      $('#stream').prepend(
        '<div class="tweet">' +
          '<div class="content">' +
            '<img class="avatar" src="img/alagoon.jpg" />' +
            '<strong class="fullname">Taylor Munnerlyn</strong>' +
            '<span class="username">@whicksmack</span>' +
            '<p class="tweet-text">' + tweetText + '</p>' +
            '<div class="tweet-actions">' +
              '<ul>' +
                '<li><span class="icon action-reply"></span> Reply</li>' +
                '<li><span class="icon action-retweet"></span> Retweet</li>' +
                '<li><span class="icon action-favorite"></span> Favorite</li>' +
                '<li><span class="icon action-more"></span> More</li>' +
              '</ul>' +
            '</div>' +
            '<div class="stats">' +
              '<div class="retweets">' +
                '<p class="num-retweets">30</p>' +
                '<p>RETWEETS</p>' +
              '</div>' +
              '<div class="favorites">' +
                '<p class="num-favorites">6</p>' +
                '<p>FAVORITES</p>' +
              '</div>' +
              '<div class="users-interact">' +
                '<div>' +
                  '<img src="img/jennyshen.jpg" />' +
                  '<img src="img/damenleeturks.jpg" />' +
                '</div>' +
              '</div>' +
              '<div class="time">' +
                '1:04 PM - 19 Sep 13' +
              '</div>' +
            '</div>' +
            '<div class="reply">' +
              '<img class="avatar" src="img/alagoon.jpg" />' +
              '<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
            '</div>' +
          '</div>' +
        '</div>');
        $('#compose-tweet').val('');
      }


  });


  $('.tweet').mouseenter(function() {
    $(this).find('.tweet-actions').slideDown('medium');
  });

  $('.tweet').mouseleave(function() {
    $(this).find('.tweet-actions').slideUp('medium');
  });



});
