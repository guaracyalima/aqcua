/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('InforSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/acquarius/infor.json');

    return AbsSrv.getRest();
    
});
