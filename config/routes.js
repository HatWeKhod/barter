module.exports = function(app, passport, db){
  var loginCtrl = require('../app/controllers/login'),
  barterCtrl = require('../app/controllers/barter'),
  postCtrl = require('../app/controllers/post'),
  messageCtrl = require('../app/controllers/message');

  // Middleware used to determine if the user is authenticated
  var auth = function (req, res, next){
    !req.isAuthenticated() ? res.send(401) : next();
  };
//    console.log(loginCtrl.index);
  // Login Routes
  app.get('/', loginCtrl.index);
  app.get('/loggedIn', loginCtrl.loggedIn);
  app.get('/logout', loginCtrl.loggedOut);
  app.get('/auth/facebook', passport.authenticate('facebook'));
  app.get('/auth/callback/facebook', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  }));
  
  app.get('/fbnotify',auth,barterCtrl.fbnotify);
  app.post('/fbnotify?fb_source=notification',loginCtrl.loggedIn);

  // Post Controls
  app.get('/posts', auth, postCtrl.posts);
  app.get('/post/:id', auth, postCtrl.getpost);
  app.post('/post', auth, postCtrl.post);
  app.delete('/post/:id', auth, postCtrl.deletePost);
  //Update Post
      app.post('/updatePost', auth, postCtrl.updatePost);


  // Message Controls
  app.post('/conversation', auth, messageCtrl.sendNewConversation);
  app.post('/message', auth, messageCtrl.sendMessage);
  app.delete('/conversation/:id', auth,messageCtrl.deleteConversation);

  // Barter Request Controls
  app.put('/barter/accept/:id', auth, barterCtrl.acceptBarter);
  app.put('/barter/reject/:id', auth, barterCtrl.rejectBarter);

//Rating

  app.post('/rating', auth, messageCtrl.giveRating);
  
  
  //App Feedback
    app.get('/user_gave_feedback/:id', auth, messageCtrl.user_gave_feedback);
    app.post('/send_feedback', auth, messageCtrl.send_feedback);

  
  //Users
//    app.get('/user/:id', auth, postCtrl.user);


};
