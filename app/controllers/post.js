var Post = require('../models/post').Post,
        Conversation = require('../models/conversation').Conversation,
        FbUsers = require('../models/facebook').FbUsers,
        Message = require('../models/message').Message,
        utils = require('../utils'),
        _ = require('lodash');

var getUserRating = function (fbId, callback) {
    FbUsers.findOne({fbId: fbId}, function (err, fbuser) {
        var user_average_score = 0;
        if (fbuser) {
            if (fbuser.people_rate_count) {
                user_average_score = fbuser.barter_score / fbuser.people_rate_count;
            }
        }

        callback && callback(user_average_score);

    });
    console.log('here_user_average_score', user_average_score);
    return user_average_score;
}



// Send back all posts
var posts = function (req, res, next) {
    Post.find({}).exec()
            .then(function (posts) {
                var all_posts = [];
                var length = posts.length;
                posts.forEach(function (post, index) {

                    FbUsers.findOne({fbId: post.fbId}).exec().then(function (fbuser) {
                        var user_average_score = 0;
                        if (fbuser) {
                            if (fbuser.people_rate_count) {
                                user_average_score = fbuser.barter_score / fbuser.people_rate_count;
                            }
                        }
                        post.user_average_score = Math.round(user_average_score.toFixed(2));
                        all_posts.push(post);
                        if (all_posts.length === length) {
                            res.send(200, all_posts);
                        }
                    });
                });
            });

};
//var posts = function (req, res, next) {
//    Post.find({}, function (err, posts) {
//        utils.handleError(err, 500);
//        var all_posts = [];
//        posts.forEach(function (post) {
//            var user_average_score = 0;
//    let newBookmark = FbUsers.findOne({fbId: post.fbId}, function (err, fbuser) {
//        var user_average_score = 0;
//        if (fbuser) {
//            if (fbuser.people_rate_count) {
//               user_average_score = fbuser.barter_score / fbuser.people_rate_count;
//            }
//        }
//            
//  post.user_average_score = user_average_score;
//                            console.log('post.user_average_score', post.user_average_score);
//
//                all_posts.push(post);
//    });
//              
//
//
//  
//   
//                console.log('posting',post.user_average_score);
//
////            setTimeout(function () {
//                post.user_average_score = user_average_score;
//                            console.log('post.user_average_score', post.user_average_score);
//
//                all_posts.push(post);
////            }, 3000);
//        });
////        console.log('all_posts',all_posts);
//        res.send(200, all_posts);
//    });
//};
var getpost = function (req, res, next) {
    Post.findById({_id: req.params.id}, function (err, post) {
        utils.handleError(err, 500);
        res.send(200, post);
    });
};

// Create post and save it to the database
var postItem = function (req, res, next) {
    var post = new Post({
        'fbId': req.body.fbId,
        'name': req.body.name,
        'itemName': req.body.itemName,
        'description': req.body.description,
        'condition': req.body.condition,
        'loc': {type: 'Point', coordinates: [req.body.location[1], req.body.location[0]]},
        'image': req.body.image.dataURL
    });
    utils.saveChanges(res, post, 201, 500);
};

// Delete post from the database
var deletePost = function (req, res, next) {
    Post.findByIdAndRemove(req.params.id, function (err) {
        utils.handleError(err, 500);
        res.send(204);
    });
};


// Update post and save it to the database
var updatePost = function (req, res, next) {

    var post = {
        'fbId': req.body.fbId,
        'name': req.body.name,
        'itemName': req.body.itemName,
        'description': req.body.description,
        'condition': req.body.condition,
        'loc': {type: 'Point', coordinates: [req.body.location[1], req.body.location[0]]},
    }
    if (req.body.image.dataURL) {
        post.image = req.body.image.dataURL;
    }
    Post.findOneAndUpdate({_id: req.body.post_id}, post, {new : true}, function (err, doc) {
        utils.handleError(err, 500);
        return res.send("succesfully updated");
    });
};
module.exports = {
    posts: posts,
    post: postItem,
    getpost: getpost,
    deletePost: deletePost,
    updatePost: updatePost
};
