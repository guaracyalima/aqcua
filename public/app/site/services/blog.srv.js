/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('BlogSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/blog/:id:type/noticia.json');

    return AbsSrv.getRest();
    
});
