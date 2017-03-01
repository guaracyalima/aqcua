/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.controller('HomeCtrl', function( $scope ,$state, $timeout, $rootScope, $location, $timeout, HomeSrv ) {
    
    // alert('teste');
    // $timeout(function(){
    //     startHeroSlider();
    //     console.log(1)
    // },1000);

    // CATEGORIES PRODUTOS
    HomeSrv.get(function(response){
        $scope.home = response.home;
    });
    $scope.sliderOption = {
                                rtl:true,
                                loop:true,
                                margin:10,
                                navigation : true,
                                nav: true,
                                autoplay: true,
                                stopOnHover: true, 
                                slideSpeed : 2000, 
                                paginationSpeed : 2000, 
                                singleItem : true,
                                responsiveClass:true,
                                navText : ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
                                responsive: {
                                                0: {
                                                    items: 1
                                                },
                                                600: {
                                                    items: 3
                                                },
                                                960: {
                                                    items: 5,
                                                },
                                                1200: {
                                                    items: 6
                                                }
                                            }
                            }
});