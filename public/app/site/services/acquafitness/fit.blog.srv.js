/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('FitBlogSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/acquafitness/fit-blog.json');

    return AbsSrv.getRest();
    
});
