/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('MailsSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/emails/:id:type/:cmd');

    return AbsSrv.getRest();
    
});