/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.config( function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider, $httpProvider, $provide, URI_API, CONF_MODULE, CONF_LAZY ) {
        
        $urlRouterProvider.otherwise('home');
        
        $stateProvider
        .state('main', {
            url: '/',
            abstract: true,
            controller: 'MainCtrl',
            templateUrl: 'tpls/site/main.html',
            resolve: load([
                'mdMain',
                'scrollNav'
            ]),
            onEnter: function($rootScope){
                // $templateCache.removeAll();
                $rootScope.titleHead = 'GRUPO ACQUA';
            }
        })
        
        /*
         * =========================================================
         * HOME ROUTES GROUPS
         * =========================================================
         */
        .state('main.home', {
            url: 'home',
            controller: 'HomeCtrl',
            templateUrl: 'tpls/site/home.html',
            resolve: load([
                'parallaxImg',
                'maps',
                'mdHome'
            ]),
            onEnter: function ($rootScope, $timeout) {
                $rootScope.loading =  true;
                //$route.reload();
                $timeout(function(){
                    $rootScope.loading =  false;
                },1500);
            }
        })

        /*
         * =========================================================
         * ACQUAMED ROUTES
         * =========================================================
         */
        .state('acquamed', {
            url: '/acquamed/',
            abstract: true,
            controller: 'MainAcquaMedCtrl',
            templateUrl: 'tpls/site/acquamed/main.html',
            resolve: load([
                'scrollNav',
                'mdMainAcquaMed'
            ]),
            onEnter: function($rootScope){
                $rootScope.titleHead = 'ACQUAMED';
            }
            
        })

        .state('acquamed.home', {
            url: 'home',
            controller: 'HomeAcquaMedCtrl as medctrl',
            templateUrl: 'tpls/site/acquamed/home.html',
            resolve: load([
                'owl2',
                'maps',
                'mdHomeAcquaMed'
            ]),
            onEnter: function ($rootScope, $timeout) {
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1500);
            }
        })

        /*
         * =========================================================
         * ACQUASHOP ROUTES
         * =========================================================
         */
        .state('acquashop', {
            url: '/acquashop/',
            abstract: true,
            controller: 'MainAcquaShopCtrl',
            templateUrl: 'tpls/site/acquashop/main.html',
            resolve: load([
                'scrollNav',
                'parallaxImg',
                'mdMainAcquaShop'
            ]),
            onEnter: function($rootScope){
                $rootScope.titleHead = 'ACQUASHOP';
            }
        })

        .state('acquashop.home', {
            url: 'home',
            controller: 'HomeAcquaShopCtrl',
            templateUrl: 'tpls/site/acquashop/home.html',
            resolve: load([
                'owl2',
                'maps',
                'mdHomeAcquaShop'
            ]),
            onEnter: function ($rootScope, $timeout) {
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1500);
            }
        })

        /*
         * =========================================================
         * ACQUAFITNESS ROUTES
         * =========================================================
         */
        .state('acquafitness', {
            url: '/acquafitness/',
            abstract: true,
            controller: 'MainAcquaFitnessCtrl',
            templateUrl: 'tpls/site/acquafitness/main.html',
            resolve: load([
                'scrollNav',
                'parallaxImg',
                'mdMainAcquaFitness'
            ]),
            onEnter: function($rootScope){
                $rootScope.titleHead = 'ACQUAFITNESS';
            }
        })

        .state('acquafitness.home', {
            url: 'home',
            controller: 'HomeAcquaFitnessCtrl',
            templateUrl: 'tpls/site/acquafitness/home.html',
            resolve: load([
                'owl2',
                'maps',
                'mdHomeAcquaFitness'
            ]),
            onEnter: function ($rootScope, $timeout) {
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1500);
            }
        })

        /*
         * =========================================================
         * ACQUARIUS ROUTES
         * =========================================================
         */
        .state('acquarius', {
            url: '/acquarius/',
            abstract: true,
            controller: 'MainAcquariusCtrl',
            templateUrl: 'tpls/site/acquarius/main.html',
            resolve: load([
                'scrollNav',
                'parallaxImg',
                'mdMainAcquarius'
            ]),
            onEnter: function($rootScope){
                $rootScope.titleHead = 'ACQUARIUS';
            }
        })

        .state('acquarius.home', {
            url: 'home',
            controller: 'HomeAcquariusCtrl',
            templateUrl: 'tpls/site/acquarius/home.html',
            resolve: load([
                'owl2',
                'maps',
                'mdHomeAcquarius'
            ]),
            onEnter: function ($rootScope, $timeout) {
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1500);
            }
        })
        
        /*
         * =========================================================
         * CONTATO ROUTES
         * =========================================================
         */
        .state('main.contato', {
            url: 'contato',
            templateUrl: 'tpls/site/contato.html',
            resolve: load([
                'mdContato',
                'maps'
            ]),
            onEnter: function ($rootScope, $timeout) {
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1500);
            }
        });

        // LOAD LAZYLOAD
        function load(srcs, callback) {
            return {
                deps: ['$ocLazyLoad', '$q',
                function( $ocLazyLoad, $q ){
                    var deferred = $q.defer();
                    var promise  = false;
                    srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                    if(!promise){
                        promise = deferred.promise;
                    }
                        angular.forEach(srcs, function(src) {
                        promise = promise.then( function(){
                            if(CONF_LAZY[src]){
                            return $ocLazyLoad.load(CONF_LAZY[src]);
                            }
                            angular.forEach(CONF_MODULE, function(module) {
                            if( module.name == src){
                                name = module.name;
                            }else{
                                name = src;
                            }
                            });
                            return $ocLazyLoad.load(name);
                        } );
                        });
                        deferred.resolve();
                        return callback ? promise.then(function(){ return callback(); }) : promise;
                }]
            }
        } 
});