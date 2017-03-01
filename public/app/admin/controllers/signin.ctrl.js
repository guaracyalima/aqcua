angular.module('mangueApp')
.controller('SigninCtrl', function( $scope ,$state, $rootScope, $timeout, $location, $localStorage,  ngToast, AuthSrv) {
    console.log('Signin ...')
    //ngToast.success('Aguarde os dados estão sendo processados.');
    $rootScope.showHeader = false;
    
    function successAuth(res) {
        $localStorage.token = res.token;
        $timeout(function(){
            $state.go('main.dash', {reload: true});
        },1000);
    }
    
    $scope.signin = function () {
      if ($scope.userForm.$valid) {
          var formData = {
                login: $scope.user.login,
                password: $scope.user.password
          };
          AuthSrv.signin(formData, successAuth, function () {
              // $rootScope.error = 'Invalid credentials.';
              ngToast.danger('Credênciais invalidas.');
          })
      }else{
        ngToast.danger('Preencha corretamente o formulário.');
      }
    };
});
