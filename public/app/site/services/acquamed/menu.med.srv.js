/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('MenuMedSrv', function (AbsSrv) {
    
    AbsSrv.uri('/api/acquamed/menu.json');

    return AbsSrv.getRest();
    
});
