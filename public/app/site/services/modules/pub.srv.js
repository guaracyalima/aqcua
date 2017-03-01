/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('PubSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/publicidade/:id:type/:cmd');

    return AbsSrv.getRest();
    
});