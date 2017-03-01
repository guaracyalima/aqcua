/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('EspSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/saude/especialidades/:id:type/:cmd');

    return AbsSrv.getRest();
    
});