/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.controller('HomeCtrl', function( $scope ,$state, $timeout, $rootScope, $location, $timeout, GrupoSrv) {
    
    // // IMG PARALLAX
    // $scope.imgParallax = {
    //     'background': 'url(assets/img/bem-estar.jpg) center no-repeat'
    // };
    // alert('teste');
    // $timeout(function(){
    //     startHeroSlider();
    //     console.log(1)
    // },1000);
    $scope.pages = {};
    $scope.products = {};
    $scope.c1 = true;
    $scope.c2 = true;
    $scope.c3 = true;
    // $scope.navAcquaMed = {};
    
    // NAV BAR
    GrupoSrv.get(function(response){
        $scope.pagesGrupo = response;
    });

    // MAPS CONF
    // $scope.confMapsMed = {
    //                     height: '300px',
    //                     width:  '100%',
    //                     zoom:   12,
    //                     icon:   'assets/img/marker/gmap_marker.png',
    //                     streetV: true,
    //                     centerLat: -8.105721175796807,
    //                     centerLng: -34.89000319999997,
    //                     marker: [
    //                                 {
    //                                     lat : -8.105721175796807,//51.508515, 
    //                                     lng : -34.89000319999997,//-0.125487,
    //                                     name: 'Remil', 
    //                                     desc: 'Rua blabla, nº 30'
    //                                 }
    //                             ],
    //                     style: null
    //                     // style: [{
    //                     //             stylers: [
    //                     //                 { 'hue': '#00aaff' }, 
    //                     //                 { 'saturation': -100 }, 
    //                     //                 { 'gamma': 2.15 }, 
    //                     //                 { 'lightness': 12 }
    //                     //             ]
    //                     //         }]
    //                 };
});