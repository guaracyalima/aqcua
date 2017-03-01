/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.controller('DashCtrl', function( $scope ,$state, $rootScope, $timeout, ngToast, $http, URI, DashSrv) {
    // ROOT SCOPE
    
    $timeout(function() {
            $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
            $scope.series = ['Series A', 'Series B'];

            $scope.data = [
                    [65, 59, 80, 81, 56, 55, 40],
                    [28, 48, 40, 19, 86, 27, 90]
            ];
    }, 100);
    // console.log( 'Opa' )
    // CATEGORIES PRODUTOS
    DashSrv.get(function(response){
        // console.log( 'Opa2' )
        // console.log( response )
        $scope.dash = response.dash;
    });
    
    $scope.teste = function()
    {
        console.log('teste')
        $http.get(URI.API + '/teste').success(function(response){
            console.log(response);
        });
    }


});
