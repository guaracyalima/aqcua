/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('MenuShopSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/acquashop/menu.json');

    return AbsSrv.getRest();
    
});
