/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('ServSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/saude/servicos/:id:type/:cmd');

    return AbsSrv.getRest();
    
});