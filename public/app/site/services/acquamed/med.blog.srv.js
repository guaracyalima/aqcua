/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('MedBlogSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/acquamed/med-blog.json');

    return AbsSrv.getRest();
    
});
