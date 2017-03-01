angular.module('mangueApp')
.run(function($rootScope, $state, $location, $localStorage, DTDefaultOptions) {
    // UF LIST
    $rootScope.states = [
        'AC','AL','AM','AP','BA','CE','DF','ES','GO','MA',
        'MG','MS','MT','PA','PB','PE','PI','PR','RJ','RN','RO','RR',
        'RS','SC','SE','SP','TO'
    ];
    // Display 5 items per page by default
    DTDefaultOptions.setDisplayLength(10);
    // Router Change Start
    $rootScope.$on( "$routeChangeStart", function(event, next) {
         if ($localStorage.token == null) {
             if ( next.name !== "auth.signin") {
                 $location.path("auth/signin");
             }
         }
     });
});
