/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('MenuAcquariusSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/acquarius/menu.json');

    return AbsSrv.getRest();
    
});
