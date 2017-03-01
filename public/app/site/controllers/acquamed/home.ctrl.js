/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.controller('HomeAcquaMedCtrl', function( $scope ,$state, $timeout, $rootScope, $location, $timeout, Modal, MedSrv, MedServicesSrv, BlogSrv, TeamSrv) {
    // VAR ROOT
    //$rootScope.loading = true;
    $rootScope.acLetter = '';
    $rootScope.showModal = '';
    // VAR LOCAL
    $scope.slides = {};
    $scope.pages = {};
    $scope.medCat = {};
    $scope.servicos = {};
    $scope.confModal = {
        templates: 'tpls/site/acquamed/modal/blog.html',
        templatesTeam: 'tpls/site/acquamed/modal/team.html',
        titles: 'Noticias',
        titlesTeam: 'Equipe',
        size: 'lg'
    };
    
    // PAGE 
    MedSrv.get(function(response){
        $scope.pages = response;
    });
    
    MedServicesSrv.get(function(response){
        $scope.medCat = response.especialidades;
        $scope.medSer = response.servicos;
    })

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
    // SHOW BLOG
    $scope.showTeam = function(idTeam) {
        console.log('teste')
        return Modal.openModal({
                templateUrl: $scope.confModal.templatesTeam,
                title: $scope.confModal.titlesTeam,
                size: $scope.confModal.size,
                callback: function($scope) {
                    TeamSrv.get({id:idTeam}, function(response){
                        $scope.team = response;
                    })
                }
            }
        );
    };
    
    // CONF CAROUSEL
    $scope.sliderOption = {
                                rtl:false,
                                //loop:true,
                                margin:40,
                                autoplay: true,
                                autoplayHoverPause: true,
                                autoplaySpeed: 1500,
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
                                                    items: 4
                                                }
                                            }
                            };
    // CONF NAV
    $scope.navOption = {
                                rtl:false,
                                loop:false,
                                dots: false,
                                margin:1,
                                responsiveClass:true,
                                navigation : true,
                                nav: true,
                                navText : ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
                                responsiveClass:true,
                                responsive: {
                                                0: {
                                                    items: 4
                                                },
                                                600: {
                                                    items: 6
                                                },
                                                1000: {
                                                    items: 8
                                                }
                                            }
                        };

    // CONF BLOG
    $scope.blogOption = {
                                rtl:false,
                                loop:false,
                                margin:15,
                                video:true,
                                videoHeight: 240,
                                lazyLoad:true,
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
    
    
    // BTN FILTER
    $scope.allLetter = function( letter )
    {
        $rootScope.acLetter = '';
        // $scope.servicos = {};
    }

    // ACT
    $scope.getMedServices = function( val )
    {
        var ser = {};
        angular.forEach( $scope.medSer, function( col ){
            if( val === col.hs_id ){
                ser = col;
            }
        });
        $timeout(function(){
            console.log( ser );
            $scope.servicos = ser;
        },true);
    }

});