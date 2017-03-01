
/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('MedSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/med.json');

    return AbsSrv.getRest();
    
});
