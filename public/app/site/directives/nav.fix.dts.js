 /*
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.directive('dtsNavFix',function( $http, $timeout, MENU_FIXED){
    
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
    
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
});