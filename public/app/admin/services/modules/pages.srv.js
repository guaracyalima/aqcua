/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('PagesSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/pages/:id:type/:cmd');
    
    return AbsSrv.getRest();
    
});
