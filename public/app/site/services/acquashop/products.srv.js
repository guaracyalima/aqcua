/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('ProductsShopSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/acquashop/products.json');

    return AbsSrv.getRest();
    
});
