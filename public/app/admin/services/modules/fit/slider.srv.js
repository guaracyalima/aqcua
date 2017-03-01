/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('SliderSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/slider/:id:type/:cmd');

    return AbsSrv.getRest();
    
});