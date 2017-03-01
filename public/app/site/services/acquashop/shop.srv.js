/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('ShopSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/shop.json');

    return AbsSrv.getRest();
    
});
