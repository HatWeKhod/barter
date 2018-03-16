angular.module('barterApp')
        .controller('MapCtrl', function ($scope, $location, $http, $rootScope, MapService, $anchorScroll, $window,$timeout) {
            $scope.initialize = function () {
                $rootScope.spinnerToggle();
                MapService.initialize();
            };

            $scope.postRedirect = function () {
                $location.path('/post');
            };
            $scope.postEditRedirect = function (post) {
                if ($rootScope.fbId != post.fbId) {
                    alert('Not Allowed');
                    return false;
                }
                $location.path('/postEdit/' + post._id);
                $rootScope.editPostData = post;
            };
            $scope.convRedirect = function () {
                $location.path('/dashboard');
            };
            $scope.logout = function () {
                $http.get('/logout')
                        .success(function (data, status, headers, config) {
                            console.log('Attempting to logout');
                            $location.path('/');
                        });
            };

            $scope.newConversationDisplay = false;

            $rootScope.displayNewConversation = function () {
                if (!$scope.newConversationDisplay) {
                    $scope.newConversationDisplay = true;
                }
            };

            $scope.sendNewConversation = function (recipient,selectedPost) {
             
                if (recipient.fbId === $rootScope.fbId) {
                    alert('Cannot trade with yourself');
                    $rootScope.togglePostModal();
                    $scope.newConversation = '';
                    return;
                }
                console.log(selectedPost);
                if(!selectedPost ||!selectedPost.originalObject || !selectedPost.originalObject._id){
                        alert('You Need to select at least one item in order to barter');
                        return ;
                }
                $scope.data = {
                    'requestingUser': {
                        'fbId': $rootScope.fbId,
                        'name': $rootScope.name,
                        'return_post_id':selectedPost.originalObject._id
                    },
                    'message': $scope.newConversation,
                    'from': $rootScope.name,
                    '_id': recipient._id
                };
                $http.post('/conversation', $scope.data)
                        .success(function (data, status, headers, config) {
                            console.log('SUCCESS!');
                            $scope.newConversation = '';
                            $scope.togglePostModal();
                        })
                        .error(function (data, status) {
                            console.log('ERROR :(');
                        });
            };

            $scope.search = function (post) {
                var contains = function (search) {
                    return _.contains(post.itemName.toLowerCase(), search) ||
                            _.contains(post.description.toLowerCase(), search) ||
                            _.contains(post.condition.toLowerCase(), search) ||
                            _.contains(post.name.toLowerCase(), search);
                };

                if ($scope.searchText) {
                    var search = $scope.searchText.toLowerCase();
                    return (contains(search)) ? true : false;
                } else {
                    return true;
                }
            };

            $rootScope.postModalShow = false;
            $rootScope.togglePostModal = function () {
$rootScope.$broadcast('angucomplete-ie8:clearInput');
                $scope.postModalShow = !$scope.postModalShow;
            };

            $rootScope.zoomInPost = function (post) {
                $rootScope.spinnerToggle();
                MapService.trigger(post.__gm_id);
	   if ($window.innerWidth < 1000) {
//   $timeout( function(){
           $anchorScroll();
//        }, 3000 );
                }			
            };


            $rootScope.spinnerDisplay = false;
            $rootScope.spinnerToggle = function () {
                $rootScope.spinnerDisplay = !$rootScope.spinnerDisplay;
            };
            
  $scope.fbnotify=function(){
           $http.get('/fbnotify', $scope.data)
                        .success(function (data, status, headers, config) {
                            console.log('SUCCESS!');
                        })
                        .error(function (data, status) {
                            console.log('ERROR :(');
                        });
  }
  
  
      $scope.appRatingModalShow = false;
            $scope.toggleAppFeedbackModal = function () {
                $scope.appRatingModalShow = !$scope.appRatingModalShow;
            };
            $rootScope.giveFeedbackToApp = function (user_email, user_message) {
//                if(!user_email){
//                    alert('Email Required');
//                    return false;
//                }   
                if(!user_message){
                    alert('Enter a Message');
                    return false;
                }
                console.log(user_email);
                console.log(user_message);
                console.log($rootScope.fbId);
                $http.post('/send_feedback', {'user_email': user_email, 'user_message': user_message, 'user_name': $rootScope.name, fbId: $rootScope.fbId})
                        .success(function (data, status, headers, config) {
                            console.log('Mail sent');
                            $scope.toggleAppFeedbackModal();
                             $scope.showFeedbackButton=false;
//                            alert('Thanks For Your Feedback');
                        })
                        .error(function (data, status) {
                            console.log('Error sending Mail');
                                                alert('Error Occured');

                        });
            }
//            $scope.is_feedback_given = localStorage.getItem('feedback_to_app');
                                $scope.showFeedbackButton=false;

            console.log($rootScope.fbId);
            if ($rootScope.fbId) {

                $http.get('/user_gave_feedback/' + $rootScope.fbId)
                        .success(function (data, status, headers, config) {
                            console.log(data);
                            console.log('done');
                            if (!data) {
                                $scope.showFeedbackButton=true;
//                                $scope.toggleAppFeedbackModal();
                            }


                        })
                        .error(function (data, status, headers, config) {
                            console.log(data);
                            console.log('not done');
                        });

            }
        });
		