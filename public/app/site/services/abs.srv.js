/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.factory('AbsSrv', function ($resource, $q, URI_API) {
    var URI = null;
    return {
        uri: function(p){
            URI = URI_API.sys + p;
        },
        getPath: function(){
            return URI;
        },
        getRest: function(){
            var Resource = $resource( URI, { id: '@id' }, {
                getArray: { method: 'GET', isArray: true },
                get:      { method: 'GET'    },
                post:     { method: 'POST'   },
                update:   { method: 'PUT'    },
                _destroy: { method: 'DELETE' }
            });
            Resource.destroy = function(id) {
                var deferred = $q.defer();
                this._destroy({id: id}, function(response) {
                    deferred.resolve( response.msg );
                }, function( erro ){
                    deferred.reject( erro.data );
                });
                return deferred.promise;
            };
            Resource.prototype.$save = function(callback) {
                var deferred = $q.defer();
                if (this.id) {
                    this.$update(function(response) {
                        if (callback) {
                            callback(response); 
                        };
                        deferred.resolve( response.msg );
                    }, function( erro ){
                        deferred.reject( erro.data );
                    });
                } else {
                    this.$store(function(response) {
                        if (callback) {
                            callback(response); 
                        };
                        deferred.resolve( response.msg );
                    }, function( erro ){
                        deferred.reject( erro.data );
                    });
                }
                return deferred.promise;
            };
            return Resource;
        }
    };
});