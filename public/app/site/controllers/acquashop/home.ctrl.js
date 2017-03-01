/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.controller('HomeAcquaShopCtrl', function( $scope ,$state, $timeout, $rootScope, $location, $timeout, Modal, ShopSrv, CategoriesProductsShopSrv, ProductsShopSrv, CartSharedSrv, BlogSrv) {
    // VAR ROOT
    //$rootScope.loading = true;
    // VAR LOCAL
    $scope.startCarolsel = false;
    $scope.slides = {};
    $scope.pages = {};
    $scope.products = {};
    $scope.confModal = {
        templates: 'tpls/site/acquashop/modal/blog.html',
        titles: 'Noticias',
        size: 'lg'
    };
    
    // NAV BAR
    ShopSrv.get(function(response){
        $scope.pages = response;
    });
    // SHOW BLOG
    $scope.showBlog = function(idBlog) {
        return Modal.openModal({
                templateUrl: $scope.confModal.templates,
                title: $scope.confModal.titles,
                size: $scope.confModal.size,
                callback: function($scope) {
                    BlogSrv.get({id:idBlog}, function(response){
                        $scope.blog = response;
                    })
                    //$scope.dataBlog = id;
                }
            }
        );
    };

    // // PRODUCTS
    // ProductsShopSrv.get(function(response){
    //     $scope.products = response.products;
    // });
    // // PRODUCTS CATEGORIES
    // CategoriesProductsShopSrv.get(function(response){
    //     $scope.categories = response.categories;
    // });
    // BLOG
    // ShopBlogSrv.get(function(response){
    //     $scope.shopBlog = response.shop.blog;
    // });

    // CONF BLOG
    $scope.blogOption = {
                                rtl:false,
                                loop:false,
                                margin:15,
                                responsiveClass:true,
                                navigation : true,
                                nav: true,
                                navText : ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
                                responsiveClass:true,
                                responsive: {
                                                0: {
                                                    items: 1
                                                },
                                                600: {
                                                    items: 2
                                                },
                                                1000: {
                                                    items: 3
                                                }
                                            }
                            };


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