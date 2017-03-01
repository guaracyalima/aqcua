/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('AbsSrv', function ($resource, $q, URI) {
    var URIs = null;
    return {
        uri: function(route){
            URIs = URI.API + route;
        },
        uriAdm: function(route){
            URIs = URI.ADM + route;
        },
        getPath: function(){
            return URIs;
        },
        getRest: function(){
            var Resource = $resource( URIs, { id: '@id', cmd: '@cmd' }, {
                post:     { method: 'POST'   },
                get:      { method: 'GET'    },
                getArray: { method: 'GET', isArray: true },
                index:    { method: 'GET'    },
                show:     { method: 'GET'    },
                store:    { method: 'POST'   },
                update:   { method: 'PUT'    },//    headers: {'Content-Type': 'undefined'} },
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