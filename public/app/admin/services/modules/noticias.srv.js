/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('NoticiasSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/noticias/:id:type/:cmd');

    return AbsSrv.getRest();
    
});