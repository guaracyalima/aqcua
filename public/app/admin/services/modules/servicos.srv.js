/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('ServicosSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/servicos/:id:type/:cmd');

    return AbsSrv.getRest();
    
});