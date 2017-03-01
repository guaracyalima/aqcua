/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.service('Modal', function($uibModal, $state, $document) {
    noBack = true;
    
    this.openModal = function(options) {
        
        $uibModal.open({
            templateUrl: options.templateUrl,
            size: options.size,
            //scope: scope,
            controller: function($scope, $uibModalInstance) {
                
                $scope.title = options.title;
                
                $scope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
                    $uibModalInstance.close({toState: toState});
                });
                
                $scope.ok = function () {
                    $uibModalInstance.close($scope.selected.item);
                };
                
                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };
                
                if (options.callback) {
                    options.callback($scope);
                }
    
            },
            resolve: {
                params: function() {
                    return options.params;
                }
            },
            onEnter: function($scope, $uibModalInstance) {
                $scope.cancel = function() {
                    $uibModalInstance.dismiss('cancel');
                };
            }
        }).result.then(function(result, $uibModalInstance) {
            console.log(result.toState.url);
            console.log("close");
        }, function() {
            //$state.go('^');
        });
    };
    
});