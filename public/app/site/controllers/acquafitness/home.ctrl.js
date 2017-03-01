/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.controller('HomeAcquaFitnessCtrl', function( $scope ,$state, $timeout, $rootScope, $location, $timeout, Modal, FitSrv, BlogSrv) {
    
    //compartilhar no facebook
    //$FB.init('945650238904215');
    
    // VAR ROOT
    //$rootScope.loading = true;
    // VAR LOCAL
    $scope.pages = {};
    $scope.confModal = {
        templates: 'tpls/site/acquafitness/modal/blog.html',
        titles: 'Noticias',
        size: 'lg'
    };
    
    // NAV BAR
    FitSrv.get(function(response){
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
    $scope.getWHV = function()
    {
        $timeout(function(){
           $scope.vw = angular.element('.content-vd').width();
           $scope.vh = $scope.vw - 110;
        },100);
    }
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
});