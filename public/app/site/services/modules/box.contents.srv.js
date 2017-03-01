/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('BoxContentsSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/box/contents/:id:type/:cmd');
    
    return AbsSrv.getRest();
    
});
