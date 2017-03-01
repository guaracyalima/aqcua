/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('ShopBlogSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/acquashop/shop-blog.json');

    return AbsSrv.getRest();
    
});
