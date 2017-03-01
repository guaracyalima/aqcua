/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('GrupoSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/grupo.json');

    return AbsSrv.getRest();
    
});
