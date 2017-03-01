/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('BannersSrv', function (AbsSrv) {
    
    AbsSrv.uriAdm('/banners/:id:type/:cmd');

    return AbsSrv.getRest();
    
});