/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('CategoriasSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/loja/categorias/:id:type/:cmd');

    return AbsSrv.getRest();
    
});