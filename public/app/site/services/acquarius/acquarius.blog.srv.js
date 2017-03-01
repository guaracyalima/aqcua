/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('AcquariusBlogSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/acquarius/acquarius-blog.json');

    return AbsSrv.getRest();
    
});
