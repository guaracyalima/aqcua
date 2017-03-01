/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.controller('MainAcquaShopCtrl', function( $scope ,$state, $timeout, $rootScope, $location, $timeout, MenuShopSrv, NAV_MENU) {
    // VAR ROOT
    $rootScope.loading = true;
    // $scope.navAcquaMed = {};
    // NAV BAR
    $scope.navAcquaShop = NAV_MENU.SHOP;
    
    $rootScope.confMaps = {
                        height: '300px',
                        width:  '100%',
                        zoom:   12,
                        icon:   'img/marker/gmap_marker.png',
                        streetV: true,
                        centerLat: -12.7468162,
                        centerLng: -60.1322332,
                        marker: [
                                    {
                                        lat : -12.7468162,//51.508515, 
                                        lng : -60.1322332,//-0.125487,
                                        name: 'AcquaShop', 
                                        desc: 'Rua Afonso Pena, 145, Vilhena - Rondônia, Brazil'
                                    }
                                ],
                        style: null
                        // style: [{
                        //             stylers: [
                        //                 { 'hue': '#00aaff' }, 
                        //                 { 'saturation': -100 }, 
                        //                 { 'gamma': 2.15 }, 
                        //                 { 'lightness': 12 }
                        //             ]
                        //         }]
                    };

});