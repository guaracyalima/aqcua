/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('SobreSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/sobre/:id:type/:cmd');

    return AbsSrv.getRest();
    
});