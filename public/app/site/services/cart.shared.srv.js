/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('CartSharedSrv', function ($rootScope) {

    var sharedService = {};
    sharedService.data = {};
    sharedService.prepForBroadcast = function(val) {
        this.data = val;
        this.broadcastItem();
    };
    sharedService.broadcastItem = function() {
        $rootScope.$broadcast('handleBroadcast');
    };
    return sharedService;
});