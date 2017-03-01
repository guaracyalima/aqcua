/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */

'use strict';

angular.module('acquaApp')
.run(function($rootScope, $templateCache, $timeout) {

    // ROOT VAR        
    $rootScope.isNavCollapsed = false;
    $rootScope.dataCartShop = {};
    $rootScope.alpNav = [
        {value:'a'}, {value:'b'}, {value:'c'}, {value:'d'}, {value:'e'}, {value:'f'}, {value:'g'}, {value:'h'}, 
        {value:'i'}, {value:'j'}, {value:'k'}, {value:'l'}, {value:'m'}, {value:'n'}, {value:'o'}, {value:'p'}, 
        {value:'q'}, {value:'r'}, {value:'s'}, {value:'t'}, {value:'u'}, {value:'v'}, {value:'w'}, {value:'x'}, 
        {value:'y'}, {value:'z'}
    ]
    $rootScope.confMaps = {};
    
    //ROUTER CHANGE START
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (typeof(current) !== 'undefined'){
            $templateCache.remove(current.templateUrl);
        }
    });

    function loadStorage( storage ) {
        // ... just sit back and bask in the glory of dependency-injection.
    }

})

// I am the localStorage key that will be used to persist data for this demo.
angular.module('acquaApp').value( "storageKey", "gigants_app" );