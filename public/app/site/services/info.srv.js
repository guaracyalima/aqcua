/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('InfoSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/informacoes/:id:type/:cmd');

    return AbsSrv.getRest();
    
});