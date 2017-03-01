/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('MobileOperatorsSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/operadora/:id:type/:cmd');

    return AbsSrv.getRest();
    
});