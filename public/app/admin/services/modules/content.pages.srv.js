/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('ContentPagesSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/content/pages/:id:type/:cmd');
    
    return AbsSrv.getRest();
    
});
