Meteor.startup(function(){
  console.log("server started");
});

Highscores = new Meteor.Collection("highscores");
Globalscores = new Meteor.Collection("globalscores");



