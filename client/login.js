/**
 * LOGIN CONTROLLER
 */


// set session
Session.set('logged_in', false);
Session.set('acclog', false);

/**
 * EVENTS
 */

// event handler logins
Template.login.events({
  'click #facebooklogin': facebookLogin,
  'click #accountlogin': accountLogin
});

Template.loginacc.events({
  'keyup #username' : checkinputfield,
  'submit #customAccountLogin' : customLogin
});

// event handler logout
Template.header.events({
  'click #logout' : logout
});

Template.logoutMenu.events({
  'click #logoutButton' : logout
});

/**
 * TEMPLATE
 */

// on template create, for redirect if user already logged in
Template.login.created = function(){
  if(Meteor.userId() != null){
    localStorage.setItem(Meteor.userId(), '0');
    Session.set('logged_in', true);
    Meteor.Router.to('/');
  }else{
    console.log("not logged in yet");
  }
}

Template.login.acclog = function(){
  console.log("test");
  if(Session.get('acclog')){
    return true;
  }else{
    return false;
  }
  
}

// Logout functions
Template.header.loggedIn = function(){
  return (Meteor.user() != null);
}

Template.home.user = function(){
  if(Meteor.user() != null){
    var username = Meteor.user();
    return username;
  }
}

Template.home.firstname = function(){
  if(Meteor.user() != null){
    
    if(Meteor.user().profile.first_name){
      return Meteor.user().profile.first_name;
    }else{
      return Meteor.user().username;
    }

  }
}


/**
 * FUNCTIONS
 */

// logout
function logout(e,t){
  e.preventDefault();
  console.log("logging out");
  
  Meteor.call('setActive', (Meteor.userId()), false, function (err, res){
    // console.log(res);
    Meteor.logout(function(err){
      if(err){
        console.log(err);
      }else{
        Session.set('logged_in', false);
      }
    });
  });
  

  
}

// Facebook login
function facebookLogin(e,t){
  e.preventDefault();
  Meteor.loginWithFacebook(function(err){
    if (err) {
      return console.log(err);
    }
    console.log('facebook login', Meteor.user() );
    Meteor.call('setActive', (Meteor.userId()), true, function (err, res){
      // console.log(res);
    });
    Session.set('logged_in', true);
  });
}

// redirect account login
function accountLogin(e,t){
  e.preventDefault();
  console.log("accountLogin init");
  Meteor.Router.to('/loginacc');
}

// check input field
function checkinputfield(e,t){
  var username = t.find('#username').value;
  var loginbtn = t.find('#sendLogin');
  
  if(username.length >= 1){
    $(loginbtn).attr('disabled', false);
  }else{
    $(loginbtn).attr('disabled', true);
  }
}

// custom login
function customLogin(e,t){
  e.preventDefault();
  console.log("customLogin init");

  var username = t.find('#username').value,
      password = 'rksmsm'

  console.log(username, password);

  if(username != ''){
    Meteor.loginWithPassword(username, password, function(err){
      if (err) {
        // Inform the user that account creation failed
        console.log(err);
        if(err.error == 403 && err.reason == "User not found"){
          console.log("User not found so we will create one!");

          var email = ''+username+'@rksmsm.nl';
          console.log(username, email, password);

          Accounts.createUser({ 
              email : email,
              username : username,
              password : password
            }, function(err){
              if (err) {
                // Inform the user that account creation failed
                console.log(err);
              } else {
                // Success. Account has been created and the user
                console.log("account created");
                Meteor.Router.to('/');
              }
          });

        }

      } else {
        // Success. 
        console.log("logged in");
        Meteor.call('setActive', (Meteor.userId()), true, function (err, res){
          // console.log(res);
          Session.set('acclog', false);
          Meteor.Router.to('/');
        });
      }
    });
  }else{
    console.log("field is empty");
  }
}

// create account
function createAccount(e,t){
  e.preventDefault();
  console.log("create init");

  var username = t.find('#username').value,
      password = 'rksmsm'

  if(username != ''){
    var email = ''+username+'@rksmsm.nl';
    console.log(username, password);

    console.log("creating account");
    Accounts.createUser({ 
        email : email,
        username : username,
        password : password
      }, function(err){
        if (err) {
          // Inform the user that account creation failed
          console.log(err);
        } else {
          // Success. Account has been created and the user
          console.log("account created");
          Meteor.Router.to('/');
        }
    });
    
  }else{
    console.log('No username')
  }

}





