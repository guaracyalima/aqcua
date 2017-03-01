/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('MenuFitnessSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/acquafitness/menu.json');

    return AbsSrv.getRest();
    
});
