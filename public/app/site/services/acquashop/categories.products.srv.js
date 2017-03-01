/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('CategoriesProductsShopSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/acquashop/categories-products.json');

    return AbsSrv.getRest();
    
});
