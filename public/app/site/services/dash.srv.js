/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('DashSrv', function (AbsSrv) {
    
    AbsSrv.uri('/dashboard');

    return AbsSrv.getRest();
    
});