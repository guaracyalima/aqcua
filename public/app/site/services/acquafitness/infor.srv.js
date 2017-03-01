/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('InforSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/acquafitness/infor.json');

    return AbsSrv.getRest();
    
});
