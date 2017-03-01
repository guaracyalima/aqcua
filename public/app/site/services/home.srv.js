/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('HomeSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/home.json');

    return AbsSrv.getRest();
    
});
