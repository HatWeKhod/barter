angular.module('barterApp', ['imageupload', 'ngRoute', 'angular-star-rating', 'pascalprecht.translate', 'ngCookies','angucomplete-ie8'])
        .config(function ($httpProvider, $locationProvider, $routeProvider, $translateProvider) {

            // Success callback, just return the response
            var success = function (response) {
                return response;
            };
            $translateProvider.translations('en', {
                BUTTON_LANG_AR: "العربية",
                BUTTON_LANG_EN: "English",
                TITLE: 'Barter',
                WHAT_IS_BARTER: 'What is Barter?',
                BARTER_INFO: 'Barter is an interface that connects you to your community and allows you to trade items with other users and share the story behind them.',
                TRY_IT_OUT: 'Try it out',
                LOGIN_WITH_FB: 'Log in with Facebook',
                BROWSE_ITEMS: 'Browse items within your community with our map',
                FIND_ITEM: 'Find an item you like and start your trade',
                LOGIN_FB: 'Login with Facebook',
                SEARCH_NEARBY: 'Search Nearby',
                POST_ITEM: "Post an item",
                DASHBOARD: "Dashboard",
                LOGOUT: "Logout",
                TAKE_LOOK: "Take a look in your area:",
                ITEM_NAME: "Item Name",
                DESCRIPTION: "Description",
                CONDITION: "Condition",
                CONTACT: "Contact",
                UNRATED: "UnRated",
                CREATED: "Created",
                TO: "To",
                RETURN_ITEM: "Return Item",
                YOU_SELECTED: "You selected",
                MESSAGE: "Message",
                SEND_MESSAGE: "Send Message",
                GIVE_FEEDBACK: "Give Us Feedback",
                SEND: "Send",
                FEEDBACK: "Feedback",
                WRITE_FEEDBACK:"Please share your feedback and suggestions",
                ENTER_MAIL: "Enter Your Email (optional)",
                TYPE_MESSAGE: "Type a message!",
                SEARCH_YOUR_POSTS: "Search Your Posts",
                WHAT_DID_YOU_WANT_TO_SAY: "What did you want to say?",
                SEARCH_POSTS: "Search posts!",
                YOUR_POSTS: "Your Posts",
                YOUR_REQUESTS: "Your Requests",
                YOUR_OFFERS: "Your Offers",
                COMPLETED: "Completed",
                BACK: "Back",
                DELETE_POST: "Delete Post",
                OWNER: "Owner",
                CONVERSATION_WITH: "Conversation with",
                CONVERSATION_VIEW: "View Conversation",
                GIVE_RATING: "Give Rating",
                ACCEPT_BARTER: "Accept Barter",
                REJECT_BARTER: "Reject Barter",
                DELETE_CONVERSATION: "Delete Conversation",
                RATE_EXPERIENCE: "Rate your total barter experience with:",
                YOUR_RATING_VALUE: "Your rating value: ",
                WHAT_ITS_CALLED: "What's it called?",
                TELL_US: "Tell us about it.",
                WHAT_IS_CONDITION: "What's the condition?",
                UPLOAD_IMAGE: "Upload an image!",
                IS_CORRECT: "Is this correct?",
                SUBMIT: "Submit",
                CLEAR: "Clear",
                SET_LOCATION_MANUALLY: "Set Location Manually",

            }).translations('ar', {
                BUTTON_LANG_AR: "العربية",
                BUTTON_LANG_EN: "English",
                TITLE: 'مقايضة',
                WHAT_IS_BARTER: 'يعني إيه برنامج مقايضة؟',
                BARTER_INFO: 'برنامج المقايضة "هات و خذ" بيديك الفرصة لعرض أي حاجة وبيوصلك بالناس اللي ممكن تكون مهتمة بالمقايضة في المحيط بتاعك..',
                TRY_IT_OUT: 'جربها..',
                LOGIN_WITH_FB: 'سجل دخولك عن طريق حساب الفيسبوك',
                BROWSE_ITEMS: 'إستخدم الخريطة عشان تشوف المعروض في المحيط بتاعك',
                FIND_ITEM: 'ابحث عن حاجة محددة وإبدأ المقايضة بعد أن تقوم بعرض حاجة شخصية لك',
                LOGIN_FB: 'تسجيل دخول عن طريق فيسبوك',
                SEARCH_NEARBY: 'البحث في الأماكن القريبة',
                POST_ITEM: "اعرض مشاركة",
                DASHBOARD: "خلاصة عملياتك",
                LOGOUT: "الخروج",
                TAKE_LOOK: "ألقِ نظرة في منطقتك:",
                ITEM_NAME: "عنوان المشاركة",
                DESCRIPTION: "الوصف",
                CONDITION: "الحالة",
                CONTACT: "المالك",
                UNRATED: "غير مصنف",
                CREATED: "التوقيت",
                TO: "إلى",
                RETURN_ITEM: "عودة البند",
                YOU_SELECTED: "لقد اخترت",
                MESSAGE: "رسالة",
                SEND_MESSAGE: "ارسل رسالة",
                GIVE_FEEDBACK: "اخبرنا بإنطباعك",
                SEND: "إرسال",
                FEEDBACK: "قل لنا رأيك",
                WRITE_FEEDBACK:"اكتب رأيك و اقتراحاتك",
                ENTER_MAIL: "أدخل بريدك الالكتروني",
                TYPE_MESSAGE: "اكتب رسالة!",
                SEARCH_YOUR_POSTS: "البحث مشاركاتك",
                WHAT_DID_YOU_WANT_TO_SAY: "ماذا تريد أن تقول؟",
                SEARCH_POSTS: "البحث عن المشاركات!",
                YOUR_POSTS: "اللي عرضته",
                YOUR_REQUESTS: "اللي طلبته",
                YOUR_OFFERS: "المعروض عليك",
                COMPLETED: "مقايضات تمت",
                BACK: "رجوع",
                DELETE_POST: "حذف آخر",
                OWNER: "صاحب",
                CONVERSATION_WITH: "محادثة مع",
                CONVERSATION_VIEW: "مشاهدة المحادثة",
                GIVE_RATING: "منح التقييم",
                ACCEPT_BARTER: "قبول المقايضة",
                REJECT_BARTER: "رفض المقايضة",
                DELETE_CONVERSATION: "مسح المحادثة",
                RATE_EXPERIENCE: "تقييم تجربة المقايضة الخاصة بك مع:",
                YOUR_RATING_VALUE: "قيمة تقييمك:",
                WHAT_ITS_CALLED: "عنوان المشاركة - الكتاب بيبان من عنوانه",
                TELL_US: "الوصف - إحكيلي أكثر",
                WHAT_IS_CONDITION: "الحالة - جديد, مستعمل, مضروب, الخ الخ",
                UPLOAD_IMAGE: "تحميل صورة!",
                IS_CORRECT: "الصورة تمام؟",
                SUBMIT: "تمام كده",
                CLEAR: "إبدأ من جديد",
                SET_LOCATION_MANUALLY: "تحديد المنطقة يدوياٌ",

            });
            $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
            $translateProvider.preferredLanguage('en').useLocalStorage();
//  $translateProvider.preferredLanguage('en');
            // Intercept all http requests and verify the user is authenticated
            // On success return the response
            // On error redirect to the login page
//  $httpProvider.responseInterceptors.push(function($q, $location){
//    return function(promise){
//      return promise.then(success, function(response){
//        if(response.status === 401){
//          console.log('it was intercepted and there was a 401 status');
//          $location.path('/login');
//          return $q.reject(response);
//        }
//      });
//    };
//  });

            // Make an AJAX call to check if the user is logged in
            // If authenticated set rootScope name and fbId
            // Else redirect to login
            var checkLoggedIn = function ($q, $http, $location, $rootScope) {
                var deferred = $q.defer();
                $http.get('/loggedIn').success(function (res) {
                    if (res !== '401') {
                        $rootScope.name = res.name;
                        $rootScope.fbId = res.fbId;
                        deferred.resolve();
                    } else {
                        deferred.reject();
                        $location.path('/login');
                    }
                });
                return deferred.promise;
            };

            // Object of functions to resolve before rendering template
            var resolve = {
                loggedin: checkLoggedIn
            };

            $routeProvider
                    .when('/', {
                        templateUrl: '/templates/main.html',
                        controller: 'MapCtrl',
                        resolve: resolve
                    })
                    .when('/post', {
                        templateUrl: '/templates/post.html',
                        controller: 'PostCtrl',
                        resolve: resolve
                    })
                    .when('/postEdit/:id', {
                        templateUrl: '/templates/edit-post.html',
                        controller: 'PostCtrl',
                        resolve: resolve
                    })
                    .when('/dashboard', {
                        templateUrl: '/templates/dashboard.html',
                        controller: 'ConvCtrl',
                        resolve: resolve
                    })
                    .when('/login', {
                        templateUrl: '/templates/login.html',
                        controller: 'MapCtrl'
                    }).when('/fbnotify', {
                templateUrl: '/templates/main.html',
                controller: 'MapCtrl',
                resolve: resolve
            })
                    .otherwise({
                        redirectTo: '/'
                    });
        })
        .run(function ($rootScope, $http) {
            $rootScope.lang = 'en';
            console.log(localStorage);
            if (localStorage.NG_TRANSLATE_LANG_KEY) {
                $rootScope.lang = localStorage.NG_TRANSLATE_LANG_KEY;

            }
            $rootScope.default_float = 'left';
            $rootScope.opposite_float = 'right';

            $rootScope.default_direction = 'ltr';
            $rootScope.opposite_direction = 'rtl';
            $rootScope.logout = function () {
                $http.post('/auth/facebook');
            };
        });
