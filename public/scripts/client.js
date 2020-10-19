/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
jQuery(document).ready(function(){

  const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
  ]

  const renderTweets = function(tweets) {
    /**loops through tweets
    calls createTweetElement for each tweet
    takes return value and appends it to the tweets container 
    */
    for(let element in tweets) {
      const $tweet = createTweetElement(tweets[element]);
      $('#tweets-container').append($tweet);
    }
  };


  const getTime = function (time){
    if(time < 60){
      t = time + " Seconds";
    } else if (time >= 60 && time <3600)  {
       t = Math.round(time/60) + " Minutes";
    } else if (time >= 3600 && time <86400) {
      t = Math.round(time/3600) + " Hours";
    } else {
      t = Math.round(time/86400) + " Days";
    }
    return t;
  };

  const createTweetElement = function(tweet) {
    const current = Date.now();
    const created = tweet.created_at;
    const time = Math.round((current - created)/1000);
   const t = getTime(time);
    let $tweet = `<article class ="tweet">
    <header>
      <div>
        <img src=${tweet.user.avatars}> 
          ${tweet.user.name}
      </div>
      <div class="hide">${tweet.user.handle}</div>
    </header>
    <p>${tweet.content.text}</p>
    <footer>
      <div>${t}</div>
      <div>
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
    </article>`;
    return $tweet;
  };

$("form").submit(function(event){
  event.preventDefault();
  const str = $("form").serialize();
  const charaters = str.length-5;
  if(charaters === 0){
    $(".error1").show();
  } else if(charaters > 140){
    $(".error2").show();
  } else {
    $.ajax({
      url:  "/tweets/",
      method: 'POST',
      data: str
    })
    .then(()=>{
      $("textarea").val('');
      $("output").val('140');
      loadTweets();
    });
  }
});

const loadTweets = function(){
 $.ajax('/tweets', {method: 'GET'})
  .then((res)=>{
    renderTweets(res);
    $(".error1").hide();
    $(".error2").hide();
  });
};

loadTweets();

});
