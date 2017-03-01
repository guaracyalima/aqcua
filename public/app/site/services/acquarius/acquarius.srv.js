/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('AcquariusSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/acquarius.json');

    return AbsSrv.getRest();
    
});
