/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.controller('MainAcquaFitnessCtrl', function( $scope ,$state, $timeout, $rootScope, $location, $timeout, NAV_MENU) {
    // VAR ROOT
    $rootScope.loading = true;
    // NAV BAR
    $scope.navAcquaFitness = NAV_MENU.FIT ;
   
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
                                        name: 'AcquaFitness', 
                                        desc: 'Rua Afonso Pena, 145, Vilhena - Rondônia, Brazil'
                                    }
                                ],
                        style: null
                    };

});