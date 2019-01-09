var FbUsers = require('../models/facebook').FbUsers;
var nodemailer = require('nodemailer');
var path = require('path');
var handlebars = require('handlebars');
var fs = require('fs');
var template_file_path = path.join(__dirname + '/email_template/email_template.html');
var forgot_pass_temp = fs.readFileSync(template_file_path,{encoding:'utf-8'});
var signup_template_file_path = path.join(__dirname + '/email_template/signup_email_template.html');
var signup_email_temp = fs.readFileSync(signup_template_file_path,{encoding:'utf-8'});
// Sends index.jade
var index = function (req, res, next) {
  res.render('index');
};

// Check if user is logged in
var loggedIn = function (req, res) {
    console.log('session',req.session);
//    if(req.isAuthenticated()) {
//        req.session.user = req.user;
//    }
    console.log('req.isAuthenticated', req.isAuthenticated());
    console.log('session--',req.session);
  res.send(req.isAuthenticated() ? req.user : '401');
};

// register user
var registerUser = function (req, res, done) {
    console.log(req.body);
	var rand_fbid = Math.floor(Math.random() * (99999999999999-100000000)+100000000);
	var newUser = new FbUsers({
          fbId: rand_fbid,
          name: req.body.username,
		  login_type:'manual',
		  email: req.body.email,
		  password:req.body.password
        }).save(function (err, newUser) {
          if (err) throw err;
          console.log(newUser);
			if (newUser) {
				console.log(newUser);
	
				req.session.fbid = newUser.fbId;
				req.session.email = newUser.email;
				req.session.login_type = newUser.login_type;
				
				
				var env = process.env['NODE_ENV'] || 'development',
					  keys;

				  // Set environment
				  keys = (env === 'production') ? require('../config/productionKeys')[env] : require('../config/keys')[env];

				
				var nodemailer = require('nodemailer');
				var transporter = nodemailer.createTransport({
				  host: 'smtp.gmail.com',
				port: 587,
				secure: false,
					auth: {
						user: 'brstdev7@gmail.com',
						pass: 'Brstdev#$%468'
					}
				});
				var template = handlebars.compile(signup_email_temp);
				var replacements = {
					 username: newUser.name,
					 password: newUser.password,
					 user_email: newUser.email,							 
					 admin_email: 'hatwekhod@yandex.com',							 
					 brand_name: 'HatWeKhod'
				};
				var htmlToSend = template(replacements);
				var mailOptions = {
					from:'brstdev18@gmail.com',
					to: newUser.email,
					subject: 'HatWeKhod - Register email',
					html: htmlToSend
				};
					console.log(mailOptions);
				transporter.sendMail(mailOptions, function (error, info) {
					if (error) {
						console.log('in_error',error);
					  //  utils.handleError(error, 500);
						  res.send(500);
					} else {
						console.log('Email sent: ' + info.response);
						res.send({status: "200", message: 'Success','user':newUser})
						//res.send(200);
					}
				});
				
						
				/* var readHTMLFile = function(path, callback) {
						fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
							if (err) {
								throw err;
								return callback(err);
							}
							else {
								return callback(null, html);
							}
						});
					};

					var smtpTrans = nodemailer.createTransport({
					   service: 'Gmail',
						auth: {
							user: 'brstdev18@gmail.com',
							pass: 'brstdeveloper18'
						}
					  });
					readHTMLFile(signup_template_file_path, function(err, html) {
						var template = handlebars.compile(html);
						var replacements = {
							 username: newUser.name,
							 password: newUser.password,
							 user_email: newUser.email,							 
							 admin_email: 'hatwekhod@yandex.com',							 
							 brand_name: 'HatWeKhod'
						};
						var htmlToSend = template(replacements);
						var mailOptions = {
							from: 'hatwekhod@yandex.com',
							to : req.body.email,
							subject : 'Password reset request from HatWeKhod',
							html : htmlToSend
						 };

						smtpTrans.sendMail(mailOptions, function (error, response) {
							if (error) {
								console.log(error);
								callback(error);
							}else{
							console.log(response);
							res.send({status: "200", message: 'Success','user':fbuser})
							}
						});
					});  */
				
				
				
			}else{
				res.send({status: "422", message: 'Something went wrong please check your details'})
			}
		  
        });
	
	
//    if(req.isAuthenticated()) {
//        req.session.user = req.user;
//    }
    
};

// manual user login
var loginUser = function (req, res, done) {
	 FbUsers.findOne({
    email: req.body.email,
	password:req.body.password
  }, function (err, fbuser) {
    if (fbuser) {
		console.log('fbuser coming');
		console.log(fbuser);
		
		req.session.fbid = fbuser.fbId;
		req.session.email = fbuser.email;
		req.session.login_type = fbuser.login_type;
		
		res.send({status: "200", message: 'Success','user':fbuser})
    }else{
		res.send({status: "422", message: 'Something went wrong please check your details'})
	}

  });
	
	
};


// Forgot password
var forgotPassowrd = function (req, res, done) {
	console.log('forgot password body');
	console.log(req.body);
	
	var myquery = { email: req.body.email };
	
	 FbUsers.findOne({
		email: req.body.email
	  }, function (err, fbuser) {
		if (fbuser) {
			
			var nodemailer = require('nodemailer');
				var transporter = nodemailer.createTransport({
				  host: 'smtp.gmail.com',
				port: 587,
				secure: false,
					auth: {
						user: 'brstdev7@gmail.com',
						pass: 'Brstdev#$%468'
					}
				});
				var template = handlebars.compile(forgot_pass_temp);
				var replacements = {
					 username: fbuser.name,
					 password: fbuser.password,
					 user_email: fbuser.email,							 
					 admin_email: 'hatwekhod@yandex.com',							 
					 brand_name: 'HatWeKhod'
				};
				var htmlToSend = template(replacements);
				var mailOptions = {
					from:'brstdev18@gmail.com',
					to: fbuser.email,
					subject: 'Password reset request from HatWeKhod',
					html: htmlToSend
				};
					console.log(mailOptions);
				transporter.sendMail(mailOptions, function (error, info) {
					if (error) {
						console.log('in_error',error);
					  //  utils.handleError(error, 500);
						  res.send(500);
					} else {
						console.log('Email sent: ' + info.response);
						res.send({status: "200", message: 'Success','user':fbuser})
						//res.send(200);
					}
				});
			
			
			
			
			
			//res.send({status: "200", message: 'Working'});
			//req.session.fbid = '0';			
			/* var readHTMLFile = function(path, callback) {
				fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
					if (err) {
						throw err;
						return callback(err);
					}
					else {
						return callback(null, html);
					}
				});
			};

			var smtpTrans = nodemailer.createTransport({
			   service: 'Gmail',
				auth: {
					user: 'brstdev18@gmail.com',
					pass: 'brstdeveloper18'
				}
			  });
			readHTMLFile(template_file_path, function(err, html) {
				var template = handlebars.compile(html);
				var replacements = {
					 username: fbuser.name,
					 password: fbuser.password,
					 brand_name: 'HatWeKhod'
				};
				var htmlToSend = template(replacements);
				var mailOptions = {
					from: 'hatwekhod@yandex.com',
					to : req.body.email,
					subject : 'Password reset request from HatWeKhod',
					html : htmlToSend
				 };

				smtpTrans.sendMail(mailOptions, function (error, response) {
					if (error) {
						console.log(error);
						callback(error);
					}else{
					console.log(response);
					res.send({status: "200", message: 'Success','user':fbuser})
					}
				});
			});  */

			/* var smtpTrans = nodemailer.createTransport({
			   service: 'Gmail',
				auth: {
					user: 'brstdev18@gmail.com',
					pass: 'brstdeveloper18'
				}
			  });
			  var mailOptions = {
				to: req.body.email,
				from: 'email',
				subject: 'subject',
				text: 'Your pasword for HatWeKhod is '+fbuser.password+'.'
			  };
			  smtpTrans.sendMail(mailOptions, function(err) {
				console.log('email sent')

				if (err){
				console.log(err)
				} else {
				   console.log('here coming');
				}
			  }); */
			
			
			
		}else{
			res.send({status: "422", message: 'Email does not exist'})
		}

	  });
	  
	  
	  
	
	  /* var newvalues = { password: req.body.password  };
	  FbUsers.updateOne(myquery, newvalues, function(err, res) {
		if (err) throw err;
		console.log(res);
		console.log("1 document updated");
	  });  */
};


// Logs the user out and redirects to landing page
var loggedOut = function (req, res){
  req.logOut();
  res.redirect('/');
};

module.exports = {
  index: index,
  loggedIn: loggedIn,
  loggedOut: loggedOut,
  registerUser:registerUser,
  loginUser:loginUser,
  forgotPassowrd:forgotPassowrd
};