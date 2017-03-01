/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.controller('ConfMapsCtrl', function ($scope, $rootScope, $state, $timeout, $location, $localStorage, ngToast) {
    // VAR
    var self = this;
    $rootScope.loading = true;
    
    $scope.confMaps = {
            height: '300px',
            width:  '100%',
            zoom:   12,
            //icon:   'assets/img/marker/gmap_marker.png',
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