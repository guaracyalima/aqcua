/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.controller('MainCtrl', function( $scope ,$state, $timeout, $rootScope, $location, $timeout) {
    // VAR ROOT
    $rootScope.loading = true;

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

    $scope.activeNav = function(event){
        angular.element( "#navbar ul li" ).each(function( index ) {
            angular.element( this ).removeClass('active');
        });
        angular.element( $(event.target).parent() ).addClass('active');
    }

    // function addToCart(trigger) {
	// 	var cartIsEmpty = cartWrapper.hasClass('empty');
	// 	//update cart product list
	// 	addProduct();
	// 	//update number of items 
	// 	updateCartCount(cartIsEmpty);
	// 	//update total price
	// 	updateCartTotal(trigger.data('price'), true);
	// 	//show cart
	// 	cartWrapper.removeClass('empty');
	// }

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
                                        name: 'Grupo Acqua', 
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