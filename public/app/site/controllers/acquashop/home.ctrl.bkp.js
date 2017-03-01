/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.controller('HomeAcquaShopCtrl', function( $scope ,$state, $timeout, $rootScope, $location, $timeout, InforSrv, CategoriesProductsShopSrv, ProductsShopSrv, CartSharedSrv) {
    // VAR ROOT
    $rootScope.loading = true;
    // VAR LOCAL
    $scope.slides = [];
    $scope.slConf = {};
    $scope.pages = {};
    $scope.products = {};
    // $scope.navAcquaMed = {};
    $scope.numberLoaded = false;

    // CONF CAROUSEL
    $scope.slickConfig = {
        enabled: true,
        autoplay: true,
        draggable: false,
        autoplaySpeed: 3000,
        method: {},
        event: {
            beforeChange: function (event, slick, currentSlide, nextSlide) {
            },
            afterChange: function (event, slick, currentSlide, nextSlide) {
            }
        }
    };
    

    // NAV BAR
    InforSrv.get(function(response){
        $scope.slides = response.infor.slides.lists;
        $scope.numberLoaded = true;

        //$scope.slConf = response.infor.slides.conf;
        $scope.pages = response.infor.pages;
    });

    ProductsShopSrv.get(function(response){
        $scope.products = response.products;
    });
    
    CategoriesProductsShopSrv.get(function(response){
        $scope.categories = response.categories;
    });


    // WATCHS
    $scope.$watch('products', function(nv, ov){
        if( nv !== undefined ){
            $timeout(function(){
                if (nv !== ov) {
                    $scope.products = nv;
                }else{
                    $scope.products = ov;
                }
            },true);
        }
    });
    $scope.$watch('slides', function(nv, ov){
        if( nv !== undefined ){
            $timeout(function(){
                if (nv !== ov) {
                    $scope.slides = nv;
                }else{
                    $scope.slides = ov;
                }
            },true);
        }
    });

    //  ----
    //  CART
    //  ----
    //CartSharedSrv
    $scope.addCart = function($event, data) {
        // BTM
        angular.element($event.target).animateCartBtn();
        //BROADCAST
        CartSharedSrv.prepForBroadcast(data);
    };
        
    $scope.$on('handleBroadcast', function() {
        $scope.dataCart = CartSharedSrv.data;
    });  
});