/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('ProdutosSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/loja/produtos/:id:type/:cmd');

    return AbsSrv.getRest();
    
});