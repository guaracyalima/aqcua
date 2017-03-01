
/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('MedServicesSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/med/servicos.json');

    return AbsSrv.getRest();
    
});
