angular.module('barterApp')
        .controller('ConvCtrl', function ($scope, $location, $http, $rootScope, $route, $window) {

//            console.log( angular.element(document).height());
            var window_height = $window.innerHeight;
            console.log(window_height);
//            var result = document.getElementsByClassName("conversationModal");
//            var wrappedResult = angular.element(result).css('height', window_height-150 + 'px');
            $scope.isReadonly = false; // default test value
            $scope.changeOnHover = true; // default test value
            $scope.maxValue = 5; // default test value
            $scope.ratingValue = 0;
            $scope.sendMessage = function (conversation) {
                $scope.data = {
                    '_id': conversation._id,
                    'message': conversation.reply,
                    'from': $rootScope.name
                };
                $http.post('/message', $scope.data)
                        .success(function (data, status, headers, config) {
                            console.log('Message sent');
                            conversation.reply = '';
                            var time = new Date();
                            conversation.messages.push({
                                'message': $scope.data.message,
                                'from': $scope.data.from,
                                'sentAt': time
                            });
                        })
                        .error(function (data, status) {
                            console.log('Error sending message');
                        });
            };
            $scope.postsSpinnerDisplay = false;
            $scope.renderMessages = function () {
                $scope.postsSpinnerDisplay = true;
                $http.get('/posts')
                        .success(function (data, status, headers, config) {
                            console.log('Success fetching messages');
                            $scope.posts = data;
                            $scope.postsSpinnerDisplay = false;
                            $scope.yourPosts();
                        })
                        .error(function (data, status, headers, config) {
                            console.log('Error fetching messages');
                            $scope.postsSpinnerDisplay = false;
                        });
            };

            $scope.deleteConversation = function (conversation, post) {
                if (!confirm('Are you sure you want to delete the conversation?')) {
                    return;
                }
                $scope.data = {
                    _id: conversation._id
                };
                $http.delete('/conversation/' + conversation._id)
                        .success(function (data, status, headers, config) {
                            console.log('Success deleting conversation');
                            $scope.toggleConversationModal();
                            var length = post.conversations.length;
                            for (var i = 0; i < length; i++) {
                                if (post.conversations[i]._id === conversation._id) {
                                    post.conversations.splice(i, 1);
                                    break;
                                }
                            }
                        })
                        .error(function (data, status, headers, config) {
                            console.log('Error deleting conversation');
                        });
            };

            $scope.deletePost = function (post, posts) {
                if (!confirm('Are you sure you want to delete the post?')) {
                    return;
                }
                $http.delete('/post/' + post._id)
                        .success(function (data, status, headers, config) {
                            console.log('Post deleted');
                            var length = posts.length;
                            for (var i = 0; i < length; i++) {
                                if (posts[i]._id === post._id) {
                                    posts.splice(i, 1);
                                    break;
                                }
                            }
                        })
                        .error(function (data, status, headers, config) {
                            console.log('Error deleting post');
                        });
            };

            $scope.respondToBarter = function (conversation, post, type) {
                return_post_id = '';
                if (conversation.requestingUser.return_post_id) {
                    return_post_id = conversation.requestingUser.return_post_id;
                }
                $http.put('/barter/' + type + '/' + conversation._id, {return_post_id: return_post_id})
                        .success(function (data, status, headers, config) {
                            console.log('post to /barter/' + type + ' accepted');
                            if (type === 'accept') {
                                conversation.accepted = true;
                                post.completed = true;
                            }
                            $scope.toggleConversationModal();
                        })
                        .error(function (data, status, headers, config) {
                            console.log('post to /barter/' + type + ' rejected');
                        });
            };

            $scope.match = true;
            $scope.notMatch = false;

            $scope.yourPosts = function () {
                $scope.post_type = 'Your Posts';
                for (var i = 0; i < $scope.posts.length; i++) {
                    var post = $scope.posts[i];
                    post.show = (post.fbId === $rootScope.fbId) ? true : false;
                    post.rejected = false;
                    for (var j = 0; j < post.conversations.length; j++) {
                        var conversation = post.conversations[j];
                        if (conversation.accepted === false) {
                            post.rejected = true;
//                            return false;
                        }
                    }
                }
            };


            $scope.yourOffers = function () {
                $scope.post_type = 'Your Offers';
                for (var i = 0; i < $scope.posts.length; i++) {
                    var post = $scope.posts[i];
                    post.show = false;
                    post.rejected = false;
                    if (post.fbId == $rootScope.fbId) {
                        for (var j = 0; j < post.conversations.length; j++) {
                            var conversation = post.conversations[j];
                            conversation.show = false;
                            if (conversation.requestingUser.fbId.toString() != $rootScope.fbId) {
                                post.show = conversation.show = true;
                            }
                            if (conversation.accepted === false) {
                                post.rejected = true;
//                                return false;
                            }
                        }
                    }
                }
            };

            $scope.requests = function () {
                $scope.post_type = 'Your Requests';
                for (var i = 0; i < $scope.posts.length; i++) {
                    var post = $scope.posts[i];
                    post.show = false;
                    post.rejected = false;
                    if (post.fbId !== $rootScope.fbId) {
                        for (var j = 0; j < post.conversations.length; j++) {
                            var conversation = post.conversations[j];
                            conversation.show = false;
                            if (conversation.requestingUser.fbId.toString() === $rootScope.fbId) {
                                post.show = conversation.show = true;
                            }
                            if (conversation.accepted === false) {
                                post.rejected = true;
//                                return false;
                            }
                        }
                    }
                }
            };

            $scope.completed = function () {
                $scope.post_type = 'Completed Posts';
                for (var i = 0; i < $scope.posts.length; i++) {
                    var post = $scope.posts[i];
                    if (!post.completed) {
                        post.show = false;
                    } else {
                        if (post.fbId === $rootScope.fbId) {
                            post.ratingValue = post.requester_barter_rating;
                            post.show = true;
                            for (var j = 0; j < post.conversations.length; j++) {
                                post.conversations[j].show = true;
                            }
                        } else {
                            for (var k = 0; k < post.conversations.length; k++) {
                                var conversation = post.conversations[k];
                                conversation.show = false;
                                if (conversation.requestingUser.fbId.toString() === $rootScope.fbId) {
                                    post.ratingValue = post.poster_barter_rating;
                                    post.show = conversation.show = true;
                                }
                            }
                        }
                    }
                }
            };

            $scope.search = function (post) {
                var contains = function (search) {
                    return _.contains(post.itemName.toLowerCase(), search) ||
                            _.contains(post.description.toLowerCase(), search) ||
                            _.contains(post.condition.toLowerCase(), search) ||
                            _.contains(post.name.toLowerCase(), search);
                };

                if ($scope.searchDashboard) {
                    var search = $scope.searchDashboard.toLowerCase();
                    return (contains(search)) ? true : false;
                } else {
                    return true;
                }
            };

            $rootScope.conversationModalShow = false;
            $scope.showReturnPost = false;
            $rootScope.toggleConversationModal = function (conversation, post) {

                $scope.showReturnPost = false;
                if (conversation) {
                    $rootScope.setConversationModal(conversation, post);
                } else {
                    $scope.conversationModalShow = !$scope.conversationModalShow;
                }
                $scope.displayButton();
            };

            $rootScope.setConversationModal = function (conversation, post) {
                $scope.userNamePopup = post.name;
                if (post.fbId == $rootScope.fbId) {
                    $scope.userNamePopup = conversation.requestingUser.name;
                }
                if (conversation.requestingUser.return_post_id) {
                    $scope.returnItemText = "Requester's Post Item Details";
                    if (post.fbId != $rootScope.fbId) {
                        $scope.returnItemText = 'Your  Return Item Details';
                    }
                    $scope.postsSpinnerDisplay = true;
                    $http.get('/post/' + conversation.requestingUser.return_post_id)
                            .success(function (data, status, headers, config) {
                                console.log('Success fetching single Post');
                                console.log(data);
                                $scope.postsSpinnerDisplay = false;
                                $scope.returnPost = data;
                                $scope.showReturnPost = true;
                                $scope.postsSpinnerDisplay = false;
                                $scope.conversationModalShow = !$scope.conversationModalShow;
                            })
                            .error(function (data, status, headers, config) {
                                console.log('Error fetching messages');
                                $scope.conversationModalShow = !$scope.conversationModalShow;
                                $scope.postsSpinnerDisplay = false;
                            });
                } else {
                    $scope.conversationModalShow = !$scope.conversationModalShow;
                }
                $rootScope.modalConversation = conversation;
                $rootScope.modalPost = post;
            };

            // Display button if the post is not complete and if you are are owner of the post
            $scope.displayButton = function () {
                if (!$rootScope.modalPost.completed) {
                    if ($rootScope.modalPost.fbId === $rootScope.fbId && $rootScope.modalConversation.accepted === null) {
                        $scope.button = true;
                        return;
                    } else {
                        $scope.button = false;
                    }
                } else {
                    $scope.button = false;
                }
            };


            $rootScope.ratingModalShow = false;
            $rootScope.toggleRatingModal = function (conversation, post) {
                $scope.ratingModalShow = !$scope.ratingModalShow;
                if (conversation) {
                    $rootScope.setRatingModal(conversation, post);
                }
            };
            $rootScope.setRatingModal = function (conversation, post) {
                $scope.userNameRatingPopup = post.name;
                if (post.fbId == $rootScope.fbId) {
                    $scope.userNameRatingPopup = conversation.requestingUser.name;
                }
                $rootScope.modalConversation = conversation;
                $rootScope.modalPost = post;
            };

            $scope.giveRating = function (post, conversation) {
                $http.post('/rating', {
                    '_id': conversation._id,
                    'from': $rootScope.name,
                    'rating_from_fbId': $rootScope.fbId,
                    'post_id': post._id,
                    'post_requesting_user_fbId': conversation.requestingUser.fbId,
                    'poster_fbId': post.fbId,
                    'ratingValue': $scope.ratingValue
                })
                        .success(function (data, status, headers, config) {
                            console.log('User Rated');
                            $scope.toggleRatingModal();
                            $route.reload();
                        })
                        .error(function (data, status) {
                            console.log('Error sending message');
                        });
            };




//            $scope.appRatingModalShow = false;
//            $scope.toggleAppFeedbackModal = function () {
//                $scope.appRatingModalShow = !$scope.appRatingModalShow;
//            };
//            $rootScope.giveFeedbackToApp = function (user_email, user_message) {
//                if(!user_email){
//                    alert('Email Required');
//                    return false;
//                }     if(!user_message){
//                    alert('Enter a Message');
//                    return false;
//                }
//                console.log(user_email);
//                console.log(user_message);
//                console.log(localStorage);
//                console.log($rootScope.fbId);
//                $http.post('/send_feedback', {'user_email': user_email, 'user_message': user_message, 'user_name': $rootScope.name, fbId: $rootScope.fbId})
//                        .success(function (data, status, headers, config) {
//                            console.log('Mail sent');
//                            $scope.toggleAppFeedbackModal();
//                        })
//                        .error(function (data, status) {
//                            console.log('Error sending Mail');
//                        });
//            }
////            $scope.is_feedback_given = localStorage.getItem('feedback_to_app');
//            console.log($rootScope.fbId);
//            if ($rootScope.fbId) {
//
//                $http.get('/user_gave_feedback/' + $rootScope.fbId)
//                        .success(function (data, status, headers, config) {
//                            console.log(data);
//                            console.log('done');
//                            if (!data) {                               
//                                $scope.toggleAppFeedbackModal();
//                            }
//
//
//                        })
//                        .error(function (data, status, headers, config) {
//                            console.log(data);
//                            console.log('not done');
//                        });
//
//            }


        });
