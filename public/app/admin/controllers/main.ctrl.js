/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
    .controller('MainCtrl', function ($scope, $rootScope, $state, $timeout, $location, $localStorage, ngToast, AuthSrv) {
        // VAR ROOT
        // console.log('Main ...')
        $rootScope.loading = true;
        $scope.date = new Date();
        // ACTIVE NAVEGATE
        $scope.isActive = function (path) {
            return ($location.path().substr(0, path.length) === path) ? 'active' : '';
        };

        // var claims = AuthSrv.getTokenClaims();
        // if( Object.keys(claims).length  > 0 )
        // {
        //     $scope.tokenClaims = claims
        //     $rootScope.showHeader = true
        // }else{
        //     console.log( $localStorage.token )
        //     console.log(claims)
        //     //ngToast.danger('Usuario não authenticado.');
        //     $state.go('auth.signin', {reload: true});
        //     $rootScope.showHeader = false
        // }

        // if( $cookies.get('toggle') ){
        //         $rootScope.toggle = $cookies.get('toggle')
        // }

        // $rootScope.toggleSidebar = function() {
        //     $rootScope.toggle = !$rootScope.toggle, $cookies.put("toggle", $rootScope.toggle)
        //     console.log( $cookies.get('toggle') )
        // }



        $rootScope.logout = function () {
            AuthSrv.logout(function () {
                $timeout(function () {
                    //delete $localStorage.token;
                    $localStorage.$reset();
                    $state.go('auth.signin', {reload: true});
                    //location.reload();
                }, 500);
            });
        };


    });