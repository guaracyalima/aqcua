/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('TeamSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/equipe/:id:type/detalhes.json');

    return AbsSrv.getRest();
    
});
