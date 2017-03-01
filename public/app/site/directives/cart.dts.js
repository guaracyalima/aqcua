 /*
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.directive('dtsCart',function( $http, $timeout){
    
    return {
       restrict: 'A',
       replace: true,
       scope: {
            dtCart: '='
        },
       link: function(scope, element, attrs) {
           attrs.$observe("template",function(v){
               scope.templateUri = 'tpls/site/components/cart/' + v + '.html';
           });

       },
       template: '<div ng-include="templateUri"></div>'
   }

});
   /*
    return {
        restrict: 'A',
        template: MENU_FIXED.template,
        // transclude: true,
        replace: true,
        scope: {
            dtNav: '='
        },
        link: function(scope, element, attrs) {
            scope.$watch('dtNav', function(nv, ov) {
                if( nv !== undefined ){
                    if (nv !== ov) {
                        scope.menuf = nv;
                    }else{
                        scope.menuf = ov;
                    }
                }
                $timeout(function(){
                    var navHeader = 200;
                    $(window).scroll(function() {
                        var scroll = getCurrentScroll();
                        if ( scroll >= navHeader ) {
                            $('.navbar-fixed-top').addClass('on-scroll');
                            $('header').addClass('on-scroll');
                        }
                        else {
                            $('.navbar-fixed-top').removeClass('on-scroll');
                            $('header').removeClass('on-scroll');
                        }
                    });
                     
                },true);
            });
        }
    }
    */