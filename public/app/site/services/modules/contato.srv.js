/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('ContatoSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/contatos/:id:type/:cmd');

    return AbsSrv.getRest();
    
});