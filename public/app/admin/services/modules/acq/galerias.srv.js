/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('GaleriasSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/galerias/:id:type/:cmd');

    return AbsSrv.getRest();
    
});