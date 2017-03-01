/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('FitSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/fit.json');

    return AbsSrv.getRest();
    
});
