
  window.fbAsyncInit = function() {
    // init the FB JS SDK

    /* localhost */
    FB.init({
      appId      : '295545233913371',                        // App ID from the app dashboard
      channelUrl : 'http://localhost:3003/', // Channel file for x-domain comms
      status     : true,                                 // Check Facebook Login status
      xfbml      : true                                  // Look for social plugins on the page
    });
    
    /* online */
    // FB.init({
    //   appId      : '466417016772314',                        // App ID from the app dashboard
    //   channelUrl : 'http://rksmsm.meteor.com/', // Channel file for x-domain comms
    //   status     : true,                                 // Check Facebook Login status
    //   xfbml      : true                                  // Look for social plugins on the page
    // });

    // Additional initialization code such as adding Event Listeners goes here
  };

  // Load the SDK asynchronously
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));