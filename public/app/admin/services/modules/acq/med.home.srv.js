/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('GrupoHomeSrv', function (AbsSrv) {
    
    AbsSrv.uri('/grupo/home/:id:type/:cmd');

    return AbsSrv.getRest();
    
});