module.exports = function (app, passport) {
  var loginCtrl = require('../controllers/login'),
    barterCtrl = require('../controllers/barter'),
    postCtrl = require('../controllers/post'),
    messageCtrl = require('../controllers/message');

  // Middleware used to determine if the user is authenticated
  var auth = function (req, res, next) {
    //          if(req.session.user) {
    //                next();
    //          } else {
    !req.isAuthenticated() ? res.send(401) : next();
    //          }
  };
  //    console.log(loginCtrl.index);
  // Login Routes
  app.get('/', loginCtrl.index);
  app.get('/loggedIn', loginCtrl.loggedIn);
  app.get('/logout', loginCtrl.loggedOut);
  app.get('/auth/facebook', passport.authenticate('facebook', {
    scope: 'user_friends'
  }));

  app.get('/auth/callback/facebook', passport.authenticate('facebook', {
    failureRedirect: '/',
    failureFlash: true,
    successRedirect: '/',
    //    failureRedirect: '/',

  }), function (req, res) {
    // Explicitly save the session before redirecting!
    //        console.log('redirected',req);
    //        console.log('redirected_session',req.session);
    //    req.session.save(() => {
    //         
    //      res.redirect('/');
    //    })
  });

  app.get('/fbnotify', auth, barterCtrl.fbnotify);
  app.post('/fbnotify?fb_source=notification', loginCtrl.loggedIn);

  // Post Controls
  app.get('/posts', auth, postCtrl.posts);
  app.post('/posts', auth, postCtrl.posts);
  app.get('/post/:id', auth, postCtrl.getpost);
  app.post('/getpostimage', auth, postCtrl.getpostimage);
  app.post('/post', auth, postCtrl.post);
  app.delete('/post/:id', auth, postCtrl.deletePost);
  //Update Post
  app.post('/updatePost', auth, postCtrl.updatePost);


  // Message Controls
  app.post('/conversation', auth, messageCtrl.sendNewConversation);
  app.post('/message', auth, messageCtrl.sendMessage);
  app.delete('/conversation/:id', auth, messageCtrl.deleteConversation);

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
