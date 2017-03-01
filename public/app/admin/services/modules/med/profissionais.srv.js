/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('ProfSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/saude/profissionais/:id:type/:cmd');

    return AbsSrv.getRest();
    
});